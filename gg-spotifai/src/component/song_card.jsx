const SongCard = () => {
  return (
    <div class="song">
      <div class="flex">
        <img src="https://picsum.photos/200" width="48" alt="" srcset="" />
        <div class="">
          <p class="title">Song Title</p>
          <p class="artist">Song Artist</p>
        </div>
      </div>
      <div class="btn">+</div>
    </div>
  );
};

export default SongCard;
