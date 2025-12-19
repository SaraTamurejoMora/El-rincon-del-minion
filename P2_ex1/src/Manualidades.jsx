import GaleriaManualidades from "./GaleriaManualidades"
import VideoPlayer from "./VideoPlayer"

function Manualidades() {


  return (
    <main className="manualidades-pagina">
      <section className="manualidades-seccion">
        <h1 className="manualidades-titulo">Imágenes</h1>
        <GaleriaManualidades />
      </section>

      <section className="manualidades-seccion">
        <h1 className="manualidades-titulo">Vídeos</h1>
        <VideoPlayer />
      </section>
    </main>
  );
}

export default Manualidades