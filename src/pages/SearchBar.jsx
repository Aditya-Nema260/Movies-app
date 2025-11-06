import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchMovies } from "../features/searchThunk";
import Card from "../component/Card";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const { results, loading } = useSelector((state) => state.search);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) dispatch(searchMovies(query));
  };

  return (
    <div className="text-center">
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 border rounded"
        />
        <button className="ml-2 bg-blue-600 text-white px-4 py-2 rounded">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}

      <div className="flex gap-4 justify-around flex-wrap">
        {results.results
          ?.filter((movie) => movie.poster_path) 
          .map((obj) => (
            <Card key={obj.id} object={obj} />
          ))}
      </div>
    </div>
  );
};

export default SearchBar;
