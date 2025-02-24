import { useParams } from "react-router-dom"
import { getMovies, getTvShows } from "../utils/tmdb-api-helper";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";

export default function Detail() {
  const { mediaType, id } = useParams()
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true);
    const fetchFunction = mediaType === 'movie' ? getMovies : getTvShows;
  
    try {
      const data = await fetchFunction(id);
      setData(data ?? []);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return loading ? (
    <div className="skeleton animate-pulse mt-10">
      <div className="w-full h-[480px] bg-neutral-800 rounded-[40px] mb-[152px]"></div>
      <div className="flex justify-center items-start gap-x-20">
        <div className="w-[480px] h-[720px] bg-neutral-800 rounded-3xl"></div>
        <div className="w-[480px] h-full ">
          <div className="w-80 h-8 bg-neutral-800 rounded-full mb-6"></div>
          <div className="w-full h-8 bg-neutral-800 rounded-full mb-3"></div>
          <div className="w-full h-8 bg-neutral-800 rounded-full mb-3"></div>
          <div className="w-full h-8 bg-neutral-800 rounded-full mb-3"></div>
          <div className="w-full h-8 bg-neutral-800 rounded-full mb-3"></div>
          <div className="w-full h-8 bg-neutral-800 rounded-full mb-12"></div>
          <div className="w-16 h-8 bg-neutral-800 rounded-full mb-12"></div>
          <div className="w-28 h-8 bg-neutral-800 rounded-full mb-12"></div>
          <div className="w-28 h-8 bg-neutral-800 rounded-full mb-12"></div>
          <div className="w-36 h-8 bg-neutral-800 rounded-full mb-12"></div>
        </div>
      </div>
    </div>
  ) : (
    <div className="mt-10">
      <div className="w-full h-auto lg:h-[480px] rounded-2xl lg:rounded-[40px] overflow-hidden">
        <img src={data?.backdrop_path ? `https://image.tmdb.org/t/p/original/${data?.backdrop_path}` : "/images/no-image-landscape.png"} alt="background" className="w-full object-cover" />
      </div>
      <div className="relative backdrop-blur-lg w-56 lg:w-[560px] h-20 lg:h-36 z-10 bg-neutral-800/80 rounded-2xl lg:rounded-[40px] p-4 lg:p-10 -mt-10 lg:-mt-16 mb-6 lg:mb-20 ms-8 lg:ms-16">
        <p className="text-xs text-primary-200 mb-2">MaileHereko / {mediaType === 'tv' ? 'TV Shows' : 'Movies'}</p>
        <p className="text-xl lg:text-[32px]/[40px] font-semibold text-white mb-0">{data?.name || data?.original_title}</p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-start gap-x-20 mb-6">
        <div className="w-full h-auto max-w-[480px] max-h-[720px] bg-neutral-800 rounded-3xl overflow-hidden mb-6 sm:mb-0">
          <img src={data?.poster_path ? `https://image.tmdb.org/t/p/original${data.poster_path}` : "/images/movie-default.png"} alt={data?.title || data?.name || "Movie Poster"} className="w-full object-cover" />
        </div>
        {mediaType === 'tv' ? (
          <div className="w-full h-full max-w-[480px]">
            <p className="text-white text-wrap text-2xl font-bold mb-6">{data?.tagline}</p>
            <p className="text-neutral-300 text-wrap text-xl mb-6">{data?.overview}</p>
            <div className='w-[59px] h-8 flex items-center bg-black rounded-lg overflow-hidden px-1 mb-6'>
              <Star size={16} className='text-warning-400' />
              <span className='text-warning-400 text-base truncate text-clip'>{data?.vote_average.toFixed(1) || "N/A"}</span>
            </div>
            <div className="w-full grid grid-cols-2">
              <div className="mb-6">
                <p className="text-neutral-400 text-base">Type</p>
                <span className="text-neutral-100 text-xl">Movie</span>
              </div>
              <div className="mb-6">
                <p className="text-neutral-400 text-base">Status</p>
                <span className="text-neutral-100 text-xl">{data?.status ?? '-'}</span>
              </div>
              <div className="mb-6">
                <p className="text-neutral-400 text-base">First air date</p>
                <span className="text-neutral-100 text-xl">{data?.first_air_date ?? '-'}</span>
              </div>
              <div className="mb-6">
                <p className="text-neutral-400 text-base">Last air date</p>
                <span className="text-neutral-100 text-xl">{data?.last_air_date ?? '-'}</span>
              </div>
              <div className="mb-6">
                <p className="text-neutral-400 text-base">No. of Seasons</p>
                <span className="text-neutral-100 text-xl">{data?.number_of_seasons ?? '-'}</span>
              </div>
              <div className="mb-6">
                <p className="text-neutral-400 text-base">No. of episodes</p>
                <span className="text-neutral-100 text-xl">{data?.number_of_episodes ?? '-'}</span>
              </div>
              <div className="col-span-2 mb-6">
                <p className="text-neutral-400 text-base">Episode Run time</p>
                <span className="text-neutral-100 text-xl">{data?.episode_run_time ?? 0} min</span>
              </div>
              <div className="col-span-2 mb-6">
                <p className="text-neutral-400 text-base">Genres</p>
                <div className="flex items-center gap-x-1">
                  {data?.genres.map((item, index) => (
                    <span key={index} className="text-neutral-100 text-xl">{item?.name},</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ):(
          <div className="w-full h-full max-w-[480px]">
            <p className="text-white text-wrap text-2xl font-bold mb-6">{data?.tagline}</p>
            <p className="text-neutral-300 text-wrap text-xl mb-6">{data?.overview}</p>
            <div className='w-[59px] h-8 flex items-center bg-black rounded-lg overflow-hidden px-1 mb-6'>
              <Star size={16} className='text-warning-400' />
              <span className='text-warning-400 text-base truncate text-clip'>{data?.vote_average.toFixed(1) || "N/A"}</span>
            </div>
            <div className="mb-6">
              <p className="text-neutral-400 text-base">Type</p>
              <span className="text-neutral-100 text-xl">Movie</span>
            </div>
            <div className="mb-6">
              <p className="text-neutral-400 text-base">Release Date:</p>
              <span className="text-neutral-100 text-xl">{data?.release_date ?? '-'}</span>
            </div>
            <div className="mb-6">
              <p className="text-neutral-400 text-base">Run time</p>
              <span className="text-neutral-100 text-xl">{data?.runtime ?? 0} min</span>
            </div>
            <div className="mb-6">
              <p className="text-neutral-400 text-base">Genres</p>
              <div className="flex items-center gap-x-1">
                {data?.genres.map((item, index) => (
                  <span key={index} className="text-neutral-100 text-xl">{item?.name},</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}