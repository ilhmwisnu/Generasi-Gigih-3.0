import SongTile from "./song_card";
import FavoriteSongTile from "./favorite_song_card";
import { useContext, useState } from "react";
import {TokenContext} from "../context/context"
import useFetch from "../utils/use_fetch"

const HomeView = async () => {

  let [query, setQuery] = useState("")

  let handleQuery = (e)=> setQuery(e.target.value)

  let [tracks, setTracks] = useState([])

  let accessToken = useContext(TokenContext)

  let search = ()=>{
    fetch(`https://api.spotify.com/v1/search?q=${query}&type=track`, {
      headers: {
        "Authorization" : `Bearer ${accessToken}`
      },
    }).then((res)=>res.json().then(data =>{
      console.log(data);
      setTracks(data.tracks.items)
    }))
  }

  return (
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
        <div className="">
          <h3>All Song</h3>
          <br />
          <input value={query} onChange={handleQuery} type="text" />
          <button className="btn-primary" onClick={search}>Search</button>
        </div>
        <div class="all-song">
          { tracks.map((track)=>{
            return <SongTile imgUrl={track.album.images[0].url} artist={track.artists.map((a)=>a.name).join(", ")} title={track.name}  />
          }) }
        </div>
      </div>
    </div>
  );
};

export default HomeView;
