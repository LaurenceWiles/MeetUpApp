import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetups";
import FavouritesPage from "./pages/Favourites";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layout/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetups" element={<NewMeetupsPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
