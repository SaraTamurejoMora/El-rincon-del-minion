import { useRef, useEffect } from "react";

function Contacto() {
  const correoRef = useRef(null);

  useEffect(() => {
    correoRef.current.focus(); // Focus automático
  }, []);

  return (
    <main className="contenedor-general" role="main">
      <section className="contenedor-form" aria-label="Formulario de contacto">
        <h1>Formulario de contacto</h1>

        <form>
          <div>
            <label htmlFor="correo">Correo electrónico</label>
            <input
              type="email"
              id="correo"
              name="correo"
              placeholder="correo@ejemplo.com"
              required
              ref={correoRef}
            />
          </div>

          <div>
            <label htmlFor="sugerencia">Sugerencia</label>
            <textarea
              id="sugerencia"
              name="sugerencia"
              placeholder="Escribe una super sugerencia :)"
              required
            />
          </div>

          <button type="submit" aria-label="Enviar formulario de contacto">
            Enviar
          </button>
        </form>
      </section>
    </main>
  );
}

export default Contacto;
