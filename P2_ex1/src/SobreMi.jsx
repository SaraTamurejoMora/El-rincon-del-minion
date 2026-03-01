import "../src/assets/scss/sobreMi.scss";

function SobreMi() {
  return (
    <section className="sobre-mi">
      <div className="sobre-mi-contenido">
        {/* Imagen del perfil */}
        <div className="sobre-mi-imagen">
          <img
            src="/img/sobreMi/pfp.jpg"
            alt="Perfil de la creadora"
          />
        </div>

        {/* Texto sobre mí */}
        <div className="sobre-mi-texto">
          <h2 className="section-title">Sobre mí</h2>

          {/* Bloque azul */}
          <div className="sobre-mi-bloque">
            <p>
              ¡Hola! Soy una persona creativa a la que le encantan las manualidades,
              la pintura y todo lo que implique crear algo con mis propias manos.
            </p>

            <p>
              Empecé esta web para compartir mis proyectos, inspirar a otras personas
              y demostrar que cualquiera puede disfrutar del proceso creativo,
              sin importar su nivel.
            </p>

            <p>
              Mi objetivo es crear un espacio lleno de ideas, consejos y pequeños
              trucos para que todos puedan explorar su creatividad, relajarse
              y pasar un buen rato haciendo manualidades.
            </p>

            <p>
              Mis hobbies incluyen: scrapbooking, pintura, costura y experimentar
              con materiales reciclados para crear objetos únicos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreMi;
