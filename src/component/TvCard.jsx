import { Link } from "react-router-dom";

const TvCard = ({ object }) => {


  const {
    id,
    title,
    name,
    poster_path,
    vote_average,
    release_date,
    overview,
  } = object;

  if (!poster_path) return null;

  console.log(id);
  

  return (
    <Link to={`/tv/${id}`}>
      <div className="relative w-44 sm:w-52 md:w-56 lg:w-60 xl:w-64 transition-transform duration-300 hover:scale-105 cursor-pointer group">
        <img
          className="w-full h-60 sm:h-80 md:h-96 object-cover rounded-lg shadow-md"
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title || name}
        />

        <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>

        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300 flex flex-col justify-end p-3 text-white">
          <h3 className="text-sm sm:text-base font-semibold truncate mb-1">
            {title || name}
          </h3>
          {release_date && (
            <p className="text-xs text-gray-300 mb-1">
              📅 {release_date?.split("-")[0]}
            </p>
          )}
          <p className="text-xs text-gray-200 line-clamp-3 mb-2">
            {overview || "No description available."}
          </p>
          <span className="text-xs sm:text-sm bg-yellow-400 text-black px-1.5 py-0.5 rounded-md self-start">
            ⭐ {vote_average?.toFixed(1)}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default TvCard;
