

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
        <div>
            {nuevos.map((nuevo) => (
                <div key={nuevo.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
                    <img src="./public/img/nuevo.png" alt="" />
                    <h2>{nuevo.title}</h2>
                </div>
                
            ))}
            <img src="./public/img/1f82bdcf2aa385767c55081ac4116f82.jpg" alt="" />
        </div>

    )
}

export default LoNuevo
