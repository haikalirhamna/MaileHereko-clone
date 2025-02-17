import { useEffect, useState, useRef, useCallback } from "react";
import { getSearchMulti, getTopRatedMovies } from "../utils/api-handler";
import BaseInput from "../components/UI/BaseInput";
import Card from "../components/UI/Card";
import CardPlaceholder2 from "../components/UI/CardPlaceholder2";
import { Link } from "react-router-dom";
import NotFound from "../components/Layouts/404";

export default function Movies() {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const observer = useRef();

  const fetchData = async (nextPage = 1) => {
    if (!hasMore) return;
    setLoading(true);
    try {
      const data = await getTopRatedMovies(nextPage);
      setItems((prevItems) => [...prevItems, ...data.results]);
      if (data.results.length === 0) {
        setHasMore(false);
      }
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
        const data = await getSearchMulti(event.target.value);
        const filteredData = data?.results?.filter(
          (item) => item.media_type === "movie" || item.media_type === "tv"
        );
        setItems(filteredData || []);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchData(page);
  }, []);

  useEffect(() => {
    if (page > 1) {
      fetchData(page);
    }
  }, [page]);

  const lastItemRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPage((prevPage) => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  return (
    <>
      <div className="flex flex-col items-start pt-2 lg:pt-16 mb-6">
        <p className="text-primary-200 text-xs mb-0">MaileHereko</p>
        <h1 className="text-neutral-50 text-5xl lg:text-[64px]/[80px]">Movies</h1>
      </div>
      <div className="w-full lg:max-w-[344px] px-auto mb-5 lg:mb-20">
        <BaseInput
          index={1}
          title="Search Movies or TV Shows"
          onKeyDown={handleSearch}
          value={search}
          setValue={setSearch}
          leftIcon={<img src="icons/search-normal.svg" className="w-6 h-6" />}
        />
      </div>
      <h2 className="text-neutral-400 font-semibold mb-6">({items?.length ?? 0}) items</h2>
      {loading && (
        <div className="flex justify-center lg:justify-start items-center flex-wrap gap-y-3 gap-x-4 lg:gap-y-5 lg:gap-x-6 mb-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <CardPlaceholder2 key={index} />
          ))}
        </div>
      )}
      {items.length > 0 ? (
        <div className="flex justify-center lg:justify-start items-center flex-wrap gap-y-3 gap-x-4 lg:gap-y-5 lg:gap-x-6 mb-4">
          {items.map((item, index) => (
            <Link key={index} to={`/detail/movie/${item.id}`}>
              <Card
                title={item.name || item.original_title || item.title}
                image={
                  item.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                    : item.backdrop_path
                    ? `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
                    : "/images/movie-default.png"
                }
                rating={item.vote_average}
              />
            </Link>
          ))}
          <div ref={lastItemRef} style={{ height: "10px" }} />
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
}