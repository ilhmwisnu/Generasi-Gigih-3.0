import SongTile from "./component/song_card"
import FavoriteSongTile from "./component/favorite_song_card";

function App() {
  return (
    <>
      <div class="content">
      <div class="sidebar">
        <h4 class="">Most Played</h4>
        <div class="most-played">
          <FavoriteSongTile></FavoriteSongTile>
          <FavoriteSongTile></FavoriteSongTile>
          <FavoriteSongTile></FavoriteSongTile>
        </div>
      </div>
      <div class="main">
        <h3>All Song</h3>
        <div class="all-song">
          <SongTile></SongTile>
          <SongTile></SongTile>
          <SongTile></SongTile>
          <SongTile></SongTile>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
