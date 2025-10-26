

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
        <div id="loNuevo">
            <div className="loNuevo-header">
                <h1 className="section-title">Lo más nuevo</h1>
                <div className="fancy-dash fancy-dash--capsules"></div>

            </div>

            <div className="loNuevo-contenido">
                <div className="loNuevo-lista">
                    {nuevos.map((nuevo) => (
                        <div key={nuevo.id} className="nuevo-item">
                            <span className="badge-new">NEW</span>
                            <p>{nuevo.title}</p>
                        </div>
                    ))}
                </div>

                <div className="imagen-graciosa">
                    <img
                        src="/img/alien.png"
                        alt="Imagen graciosa"
                    />

                </div>
            </div>
        </div>
    );
}

export default LoNuevo
