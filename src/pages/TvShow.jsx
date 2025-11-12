import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTVShows } from "../features/tvThunk";
import Card from "../component/Card";
import { Atom } from "react-loading-indicators";
import TvCard from "../component/TvCard";

const TVShow = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.tv);

  useEffect(() => {
    dispatch(fetchTVShows());
  }, [dispatch]);

  if (loading)
    return (
      <Atom
        color="#32cd32"
        size="large"
        text="Finding best tv shows for you"
        textColor=""
      />
    );
  if (error) {
console.log(error);

    return <p>Error loading TV shows</p>;
  }

  return (
    <div className = "p-6 space-y-10">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-500">
        TV SHOWS
      </h2>
      <div className=" ml-9 flex gap-3 justify-baseline flex-wrap">
        {items.results?.map((obj) => (
          <TvCard key={obj.id} object={obj} />
        ))}
      </div>
    </div>
  );
};

export default TVShow;
