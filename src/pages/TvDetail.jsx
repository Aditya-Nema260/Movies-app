import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTvDetail } from "../features/tvThunk";
import { addToFavourite } from "../features/favoritesSlice";
import { Link } from "react-router";
import { ToastContainer } from "react-toastify";

const TvDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { detail, loading } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(fetchTvDetail(id));
  }, [dispatch, id]);

  if (loading || !detail) return <p>Loading...</p>;


  console.log("TV  ----> ",detail);
  
  const homePage = detail.homepage;
  console.log("HP", homePage);
  const title = detail.name || detail.original_name;
  const releaseDate = detail.first_air_date;
  const backdropImageUrl = `https://image.tmdb.org/t/p/original/${detail.backdrop_path}`;
  const posterImageUrl = `https://image.tmdb.org/t/p/w500/${detail.poster_path}`;
  const runtime = detail.episode_run_time ? detail.episode_run_time[0] : "";

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backdropImageUrl})` }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative z-10 p-4 md:p-16 text-white">
        <div className="flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-12">
          <img
            src={posterImageUrl}
            alt={title}
            className="w-64 md:w-80 rounded-lg shadow-2xl shrink-0"
          />

          <div className="grow">
            <h1 className="text-5xl font-extrabold mb-4">{title}</h1>
            <p className="text-xl text-gray-300 mb-6 font-medium">
              ⭐ {detail.vote_average.toFixed(1)} | Release Date -> {releaseDate} | ⏱{"Runtime - "}
              {runtime}m (Avg. Episode)
            </p>

            {detail.tagline && (
              <p className="text-2xl italic text-teal-400 mb-6">
                "{detail.tagline}"
              </p>
            )}

            <h3 className="text-2xl font-semibold mb-3">Overview</h3>
            <p className="text-lg leading-relaxed mb-6 text-gray-200">
              {detail.overview}
            </p>

            {detail.genres && (
              <div className="flex flex-wrap gap-3 mb-6">
                {detail.genres.map((g) => (
                  <span
                    key={g.id}
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded-full text-sm font-semibold transition duration-300"
                  >
                    {g.name}
                  </span>
                ))}
              </div>
            )}

            <div className="mb-8 flex flex-wrap gap-6">
              <p className="text-lg font-semibold text-gray-300">
                Seasons:{" "}
                <span className="text-white font-bold">
                  {detail.number_of_seasons}
                </span>
              </p>
              <p className="text-lg font-semibold text-gray-300">
                Episodes:{" "}
                <span className="text-white font-bold">
                  {detail.number_of_episodes}
                </span>
              </p>
            </div>

            <div className="mb-8">
              <p className="text-lg font-semibold mb-2">
                Production Companies:
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                {detail.production_companies &&
                  detail.production_companies.slice(0, 3).map((comp) => (
                    <span
                      key={comp.id}
                      className="p-2 border border-gray-600 rounded"
                    >
                      {comp.name}
                    </span>
                  ))}
              </div>
            </div>

            <button
              className="cursor-pointer  bg-teal-500 text-black font-extrabold py-3 p-4 rounded-full transition-transform duration-300 hover:bg-teal-400 hover:scale-105 shadow-xl"
              onClick={() => dispatch(addToFavourite(detail))}
            >
              Add to Favourite
            </button>
            <Link to={homePage}>
              <button
                className="cursor-pointer  bg-teal-500 m-2 text-black font-extrabold py-3 px-8 rounded-full transition-transform duration-300 hover:bg-blue-400 hover:scale-105 shadow-xl"
                onClick={() => dispatch(addToFavourite(detail))}
              >
                More Details
              </button>
            </Link>
            <ToastContainer/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvDetail;
