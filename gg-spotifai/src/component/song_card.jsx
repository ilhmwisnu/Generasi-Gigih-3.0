const SongCard = ({title, artist, imgUrl, onClick}) => {
  return (
    <div class="song">
      <div class="flex">
        <img src={imgUrl} width="48" alt="" srcset="" />
        <div class="">
          <p class="title">{ title }</p>
          <p class="artist">{ artist }</p>
        </div>
      </div>
      <div onClick={onClick} class="btn">+</div>
    </div>
  );
};

export default SongCard;
