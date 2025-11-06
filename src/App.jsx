// import React, { useEffect, useLayoutEffect, useState } from "react";
import Login from "./component/Login";
import Nav from "./component/Nav";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import MovieDetail from "./pages/MovieDetail";
import SearchBar from "./pages/SearchBar";
import TVShow from "./pages/TvShow";

const App = () => {


  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/search" element={<SearchBar />} />
          <Route path="/tv" element={<TVShow />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
