import { useContext } from "react";
import FavouritesContext from "../store/favourites-context";
import MeetupList from "../components/layout/layout/layout/meetups/MeetupList";

const FavouritesPage = () => {
  const FavouritesCtx = useContext(FavouritesContext);

  let content;

  if (FavouritesCtx.totalFavourites === 0) {
    content = <p>You have no favourites yet. Start adding some?.</p>;
  } else {
    content = <MeetupList meetups={FavouritesCtx.favourites} />;
  }

  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  );
};

export default FavouritesPage;
