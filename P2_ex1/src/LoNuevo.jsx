function LoNuevo() {
    const nuevos = [
        {
            id: 4,
            image: "https://i.pinimg.com/736x/12/34/56/123456abcdef.jpg",
            title: "Velas Decorativas Caseras",
            description: "Tutorial completo para hacer velas decorativas personalizadas con aromas y colores únicos.",
            type: "Tutorial",
            views: 150,
            date: "15/04/2024"
        },
        {
            id: 5,
            image: "https://i.pinimg.com/736x/78/90/ab/7890abcdef1234.jpg",
            title: "Macetas DIY con Material Reciclado",
            description: "Aprende a crear macetas originales usando materiales reciclados y darle vida a tu hogar.",
            type: "Tutorial",
            views: 275,
            date: "20/04/2024"
        },
        {
            id: 6,
            image: "https://i.pinimg.com/736x/23/45/67/234567abcdef.jpg",
            title: "Pulseras de Hilo Fácil",
            description: "Guía paso a paso para hacer pulseras de hilo de colores para regalar o vender.",
            type: "Tutorial",
            views: 180,
            date: "05/05/2024"
        }
    ];

    return (
        <section id="loNuevo" aria-labelledby="loNuevo-title">
            <header className="loNuevo-header">
                <h2 id="loNuevo-title" className="section-title">Lo más nuevo</h2>
                <span className="fancy-dash fancy-dash--capsules" aria-hidden="true"></span>
            </header>

            <div className="loNuevo-contenido">
                <ul className="loNuevo-lista">
                    {nuevos.map((nuevo) => (
                        <li key={nuevo.id} className="nuevo-item">
                            <span className="badge-new" aria-label="Nuevo">NEW</span>
                            <p>{nuevo.title}</p>
                        </li>
                    ))}
                </ul>

                <div className="imagen-graciosa">
                    <img
                        src="/img/alien.png"
                        alt=""
                        aria-hidden="true"
                    />
                </div>
            </div>
        </section>
    );
}

export default LoNuevo;
