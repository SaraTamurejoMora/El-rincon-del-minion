function AudioPlayer() {
  return (
    <audio
      controls
      aria-label="Reproductor de audio: tema del canal Mii de Nintendo Wii"
    >
      <source src="audio/Nintendo_Wii_Mii_Channel_Theme.mp3" type="audio/mpeg" />
      <source src="audio/Nintendo-Wii-Mii-Channel-Theme.ogg" type="audio/ogg" />
      Tu navegador no soporta el reproductor de audio.
    </audio>
  )
}

export default AudioPlayer
