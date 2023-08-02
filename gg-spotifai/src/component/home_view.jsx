import SongTile from "./song_card"
import FavoriteSongTile from "./favorite_song_card";

const HomeView = () => {
  return ( <div class="content">
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
</div> );
}
 
export default HomeView;