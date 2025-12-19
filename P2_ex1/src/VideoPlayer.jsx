const videos = [
  {
    id: 1,
    mp4: "video/Cookie.mp4",
    webm: "video/Cookie.webm"
  },
  {
    id: 2,
    mp4: "video/Gemas.mp4",
    webm: "video/Gemas.webm"
  },
  {
    id: 3,
    mp4: "video/Pikachu.mp4",
    webm: "video/Pikachu.webm"
  }
];


function VideoPlayer() {
  return (
<div className="reels">
  {videos.map((video) => (
    <div className="reel-card" key={video.id}>
      <video
        className="reel-video"
        controls
        preload="metadata"
        loading="lazy"
      >
        <source src={video.mp4} type="video/mp4" />
        <source src={video.webm} type="video/webm" />
        Tu navegador no soporta la reproducción de vídeo.
      </video>
    </div>
  ))}
</div>


  )
}

export default VideoPlayer;
