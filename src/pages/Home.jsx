import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  fetchTrendingMovies,
  fetchPopularMovies,
  fetchUpcomingMovies,
} from "../features/movieThunk";
import Card from "../component/Card";

const Home = () => {
  const dispatch = useDispatch();
  const { items, trending, popular, upcoming, loading, error } = useSelector(
    (state) => state.movie
  );

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchTrendingMovies());
    dispatch(fetchPopularMovies());
    dispatch(fetchUpcomingMovies());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading movies </p>;

  return (
    <div className="p-6 space-y-10">
      {/* Discover Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-500">
          🎬 Discover Movies
        </h2>
        <div className="flex gap-4 justify-around flex-wrap">
          {items.results?.map((obj) => (
            <Card key={obj.id} object={obj} />
          ))}
        </div>
      </section>

      {/* Trending Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-center text-red-500">
           Trending Movies
        </h2>
        <div className="flex gap-4 justify-around flex-wrap">
          {trending?.results?.map((obj) => (
            <Card key={obj.id} object={obj} />
          ))}
        </div>
      </section>

      {/* Popular Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-center text-green-500">
          Popular Movies
        </h2>
        <div className="flex gap-4 justify-around flex-wrap">
          {popular.results?.map((obj) => (
            <Card key={obj.id} object={obj} />
          ))}
        </div>
      </section>

      {/* Upcoming Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-center text-yellow-500">
          Upcoming Movies
        </h2>
        <div className="flex gap-4 justify-around flex-wrap">
          {upcoming.results?.map((obj) => (
            <Card key={obj.id} object={obj} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
