import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTVShows } from "../features/tvThunk";
import Card from "../component/Card";
import { Atom } from "react-loading-indicators";

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
  if (error) return <p>Error loading TV shows</p>;

  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-500">
        🎬 TV SHOWS
      </h2>
      <div className="flex gap-4 justify-around flex-wrap">
        {items.results?.map((obj) => (
          <Card key={obj.id} object={obj} />
        ))}
      </div>
    </>
  );
};

export default TVShow;
