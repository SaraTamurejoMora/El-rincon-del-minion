function AudioPlayer() {
  return (
    <audio controls>
      <source src="audio/Nintendo_Wii_Mii_Channel_Theme.mp3" type="audio/mpeg" />
      <source src="audio/Nintendo-Wii-Mii-Channel-Theme.ogg" type="audio/ogg" />
      Tu navegador no soporta el audio 
    </audio>
  );
}

export default AudioPlayer;
