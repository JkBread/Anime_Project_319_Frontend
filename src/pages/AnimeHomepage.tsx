import Navbar from "../components/Organisms/Navbar";
import { animeMockData } from "../data/AnimeMockData";

export default function HomePage() {
  return (
    <main>
        <Navbar />
      <h1>Top Anime</h1>

      {animeMockData.map((anime) => (
        <div key={anime.id}>
          <img src={anime.coverImage.large} alt={anime.title.romaji} />
          <h2>{anime.title.english || anime.title.romaji}</h2>
        </div>
      ))}
    </main>
  );
}