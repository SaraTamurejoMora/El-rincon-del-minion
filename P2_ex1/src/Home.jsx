import LoNuevo from "./LoNuevo"
import PreviewBlogs from "./PreviewBlogs"
import Galeria from "./Galeria"
import AudioPlayer from "./AudioPlayer"

function Home() {
  return (
    <>
      {/* Sección de bienvenida */}
      <section id="containerBienvenida" aria-label="Bienvenida">
        <img
          src="img/saludo.png"
          alt="Saludo de bienvenida con manualidades"
        />
        <div>
          <h1>Bienvenid@s a mis manualidades</h1>
          <button type="button" aria-label="Descubre mis creaciones">
            Descubre mis creaciones
          </button>
          <div className="contenedorAudio">
            <AudioPlayer />
          </div>
        </div>
      </section>

      {/* Sección de blogs destacados */}
      <section aria-label="Blogs destacados">
        <PreviewBlogs />
      </section>

      {/* Sección Lo Nuevo */}
      <section aria-label="Lo nuevo">
        <LoNuevo />
      </section>

      {/* Sección Galería */}
      <section aria-label="Galería de manualidades">
        <Galeria />
      </section>
    </>
  )
}

export default Home
