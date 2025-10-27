

function Contacto() {


  return (
    <>
      <div className="contenedor-general">
        <div className="contenedor-form">
          <h1>Formulario de contacto</h1>
          <form action="">
            <label for="correo" >Correo electrónico</label>
            <input type="text" id="correo" name="correo" placeholder="correo@ejemplo.com" required />

            <label for="sugerencia">Sugerencia</label>
            <input type="sugerencia" id="sugerencia" name="sugerencia" placeholder="Escribe una super sugerencia :)" required></input>

            <button type="submit" >Enviar</button>
          </form>
          <div>
            {/*Añadir foto graciosa */}
          </div>
        </div>
      </div>

    </>
  )
}

export default Contacto