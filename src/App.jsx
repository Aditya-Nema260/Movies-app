import Login from "./component/Login";
import Nav from "./component/Nav";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import MovieDetail from "./pages/MovieDetail";
import SearchBar from "./pages/SearchBar";
import TVShow from "./pages/TvShow";
import Favorites from "./pages/Favorites";
import ProtectedRoute from "./component/ProtectedRoute";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>

          <Route element={<ProtectedRoute />}>
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/search" element={<SearchBar />} />
            <Route path="/tv" element={<TVShow />} />
            <Route path="/favorites" element={<Favorites />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
