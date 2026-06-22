
import AnimeHomePage from '../pages/AnimeHomepage';
import AnimeMyFavorites from '../pages/AnimeMyFavoritesPage';
import AnimeMyTierList from '../pages/AnimeMyTierListPage';
import AnimeMyWatchlist from '../pages/AnimeMyWatchlistPage';
import AddFavoritePage from '../pages/AddFavoritePage';
import EditFavoritePage from '../pages/EditFavoritePage';
import AddWatchlistPage from '../pages/AddWatchlistPage';
import EditWatchlistPage from '../pages/EditWatchlistPage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AnimeDetailPage from '../pages/AnimeDetailPage';



function App() {

    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AnimeHomePage />} />
        <Route path="/animes" element={<AnimeHomePage />} />
        <Route path="/animes/:id" element={<AnimeDetailPage />} />
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