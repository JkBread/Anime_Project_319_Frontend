
import AnimeHomePage from '../pages/AnimeHomepage';
import AnimeMyFavorites from '../pages/AnimeMyFavorites';
import AnimeMyTierList from '../pages/AnimeMyTierList';
import AnimeMyWatchlist from '../pages/AnimeMyWatchlist';
import AddFavoritePage from '../pages/AddFavoritePage';
import EditFavoritePage from '../pages/EditFavoritePage';
import AddWatchlistPage from '../pages/AddWatchlistPage';
import EditWatchlistPage from '../pages/EditWatchlistPage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {

    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AnimeHomePage />} />
        <Route path="/animes" element={<AnimeHomePage />} />
        <Route path="/favorites" element={<AnimeMyFavorites />} />
        <Route path="/tierlist" element={<AnimeMyTierList />} />
        <Route path="/watchlist" element={<AnimeMyWatchlist />} />
        <Route path="/favorites/create" element={<AddFavoritePage />} />
        <Route path="/favorites/edit/:id" element={<EditFavoritePage />} />
        <Route path="/watchlist/create" element={<AddWatchlistPage />} />
        <Route path="/watchlist/edit/:id" element={<EditWatchlistPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;