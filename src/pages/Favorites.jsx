import { useSelector } from "react-redux";
import Card from "../component/Card";

const Favorites = () => {
  const { favorites } = useSelector((state) => state.favorite);

  return (
    <div>
      {favorites.length !== 0 ? (
        favorites?.map((obj) => <Card key={obj.id} object={obj} />)
      ) : (
        <p>No favorite list fond</p>
      )}
    </div>
  );
};

export default Favorites;
