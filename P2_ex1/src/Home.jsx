import LoNuevo from "./LoNuevo"
import PreviewBlogs from "./PreviewBlogs"
import Galeria from "./Galeria"

function Home() {


  return (
    <>
      <div id="containerBienvenida">
        <img src="img/saludo.png" alt="" />
        <div>
          <h1>Bienvenid@s a mis manualidades</h1>
          <button>Descubre mis creaciones</button>
        </div>

      </div>

      <div>

      </div>

      <div>
        <PreviewBlogs />
      </div>

      <div>
        <LoNuevo />
      </div>

      <div>
        <Galeria />
      </div>


    </>
  )
}

export default Home