import LoNuevo from "./LoNuevo"
import PreviewBlogs from "./PreviewBlogs"
import Galeria from "./Galeria"

function Home() {


  return (
    <>
      <div id="containerBienvenida">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvW3dC9Vm5QdVTLw8nzF3A8XF8veYIpzJ1Cg&s" alt="" />
        <div>
          <h1>Bienvenid@s a mis manualidades</h1>
          <button>Descubre mis creaciones</button>
        </div>

      </div>

      <div>

      </div>

      <div>
        <h2>Lo más visto</h2>
        <PreviewBlogs />
      </div>

      <div>
        <h2>Lo más nuevo</h2>
        <LoNuevo />
      </div>

      <div>
        <h2>Galeria</h2>
        <Galeria />
      </div>


    </>
  )
}

export default Home