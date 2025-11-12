import { useSelector } from "react-redux";
import Card from "../component/Card";
// import { Button } from "flowbite-react";
import { useDispatch } from "react-redux";
import { removeFromFavourite } from "../features/favoritesSlice";
import { ToastContainer } from "react-toastify";
const Favorites = () => {
  const { favorites } = useSelector((state) => state.favorite);
  const dispatch = useDispatch();
  return (
    <div className="p-6 space-y-10">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-500">
        Your Favorite Content
      </h1>
      <div className="flex gap-4 justify-baseline flex-wrap">
        {favorites.length !== 0 ? (
          favorites?.map((obj) => (
            <div className="m-2">
              <Card key={obj.id} object={obj} />
              <button
                className="bg-blue-500 mt-1 w-full transition-transform hover:bg-blue-700 hover:scale-110  hover:text-white cursor-pointer hover:font-bold py-2 px-4 hover:rounded"
                onClick={() => dispatch(removeFromFavourite(obj))}
              >
                Remove from Favorite
              </button>
            </div>
          ))
        ) : (
          <p>No favorite list fond</p>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Favorites;
