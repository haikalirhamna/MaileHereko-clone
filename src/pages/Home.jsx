import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { getPopularAll, getSearchMulti } from "../utils/api-handler"
import BaseInput from "../components/UI/BaseInput"
import Card from "../components/UI/Card"
import CardPlaceholder2 from "../components/UI/CardPlaceholder2";
import NotFound from "../components/Layouts/404";

export default function Home() {
  const [data, setData] = useState()
  const [items, setItems] = useState()
  const [search, setSearch] = useState("")
  const [filters, setFilters] = useState("all")
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await getPopularAll();
      setItems(data?.results || []);
      setData(data?.results || []);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (event) => {
    if (event.key === "Enter" && search !== "") {
      setLoading(true);
      try {
        const data = await getSearchMulti(event.target.value)
        const filteredData = data?.results?.filter(item => item.media_type === "movie" || item.media_type === "tv");        
        setItems(filteredData || []);
        setData(filteredData || []);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleClick = (value) => {
    setFilters(value);
    if (value === "all") {
      setItems(data);
    } else {
      setItems(data?.filter((item) => item.media_type === value) || []);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <>
    <div className="flex flex-col items-start pt-2 lg:pt-20 mb-6">
      <h1 className="text-neutral-50 text-5xl lg:text-[64px]/[80px] mb-4">MaileHereko</h1>
      <span className="text-base text-neutral-300">List of movies and TV Shows, I, <span className="text-primary-300">Pramod Poudel</span> have watched till date.</span>
      <span className="text-base text-neutral-300">Explore what I have watched and also feel free to make a suggestion.</span>
    </div>
    <div className="w-full lg:max-w-[344px] px-auto mb-5 lg:mb-20">
      <BaseInput index={1} title='Search Movies or TV Shows' onKeydown={handleSearch} value={search} setValue={setSearch} leftIcon={<img src="icons/search-normal.svg" className='w-6 h-6'/>}/>
    </div>
    <div className="w-[368px] h-14 bg-black/20 flex items-center rounded-lg overflow-hidden p-2 mb-6">
      <span onClick={() => handleClick("all")} className={`text-xs lg:text-base font-semibold cursor-pointer rounded-lg ${filters === 'all' ? 'text-primary-50 bg-primary-400' : 'text-neutral-300'} py-2 px-8`}>All</span>
      <span onClick={() => handleClick("movie")} className={`text-xs lg:text-base font-semibold cursor-pointer rounded-lg ${filters === 'movie' ? 'text-primary-50 bg-primary-400' : 'text-neutral-300'} py-2 px-8`}>Movies</span>
      <span onClick={() => handleClick("tv")} className={`text-xs lg:text-base font-semibold cursor-pointer rounded-lg ${filters === 'tv' ? 'text-primary-50 bg-primary-400' : 'text-neutral-300'} py-2 px-8`}>TV Shows</span>
    </div>
    <h2 className="text-neutral-400 font-semibold mb-6">All ({items?.length ?? 0})</h2>
    {loading ? (
      <div className="flex justify-center lg:justify-start items-center flex-wrap gap-y-3 gap-x-4 lg:gap-y-5 lg:gap-x-6 mb-4">
        {Array.from({ length: 6 }).map((_, index) => <CardPlaceholder2 key={index} />)}
      </div>
    ) : items?.length > 0 ? (
      <div className="flex justify-center lg:justify-start items-center flex-wrap gap-y-3 gap-x-4 lg:gap-y-5 lg:gap-x-6 mb-4">
        {items.map((item, index) => (
          <Link key={index} to={`/detail/${item.media_type}/${item.id}`}>
            <Card
              title={item.name || item.original_title || item.title}
              image={
                item.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                  : item.backdrop_path
                  ? `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
                  : '/images/movie-default.png'
              }
              rating={item.vote_average}
            />
          </Link>
        ))}
      </div>
    ) : (
      <NotFound />
    )}
    </>
  )
}