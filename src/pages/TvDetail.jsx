import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { fetchMovieDetail } from "../features/movieThunk";
import { fetchTvDetail } from "../features/tvThunk";
import { addToFavourite } from "../features/favoritesSlice";

const TvDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { detail, loading } = useSelector((state) => state.movie);

  console.log(detail);

  useEffect(() => {
    dispatch(fetchTvDetail(id));
  }, [dispatch, id]);

  if (loading || !detail) return <p>Loading...</p>;

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col md:flex-row items-center p-4 md:p-16">
      <img
        src={`https://image.tmdb.org/t/p/w500/${detail.poster_path}`}
        alt={detail.title}
        className="w-64 md:w-80 rounded-lg shadow-lg"
      />
      <div className="md:ml-10 mt-6 md:mt-0 max-w-xl">
        <h1 className="text-4xl font-bold mb-3">{detail.title}</h1>
        <p className="text-gray-400 mb-4">
          ⭐ {detail.vote_average.toFixed(1)} | 📅 {detail.release_date}
        </p>
        <p className="text-lg leading-relaxed mb-4">{detail.overview}</p>

        {detail.genres && (
          <div className="flex flex-wrap gap-2">
            {detail.genres.map((g) => (
              <span
                key={g.id}
                className="bg-blue-700 px-3 py-1 rounded-full text-sm"
              >
                {g.name}
              </span>
            ))}
          </div>
        )}
        <button
          className="bg-red-500 mt-1 rounded-2xl transition-transform hover:bg-red-700 hover:scale-110  hover:text-white cursor-pointer hover:font-bold py-2 px-4 hover:rounded"
          onClick={() => dispatch(addToFavourite(detail))}
        >
          Add to Favourite
        </button>
      </div>
    </div>
  );
};

export default TvDetail;
