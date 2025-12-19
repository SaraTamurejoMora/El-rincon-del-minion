const imgGaleriaGeneral = [
  { id: 1, url: "img/galeriaManualidades/ArbolVida.webp", alt: "Árbol de la vida" },
  { id: 2, url: "img/galeriaManualidades/AssassinsCreed.webp", alt: "Assassin's Creed" },
  { id: 3, url: "img/galeriaManualidades/Benimaru.webp", alt: "Benimaru" },
  { id: 4, url: "img/galeriaManualidades/BichoAmarillo.webp", alt: "Bicho amarillo" },
  { id: 5, url: "img/galeriaManualidades/BichosHollowKight.webp", alt: "Bichos de Hollow Knight" },
  { id: 6, url: "img/galeriaManualidades/Buho.webp", alt: "Búho" },
  { id: 7, url: "img/galeriaManualidades/CerdoMinecraft.webp", alt: "Cerdo de Minecraft" },
  { id: 8, url: "img/galeriaManualidades/Diamante.webp", alt: "Diamante" },
  { id: 9, url: "img/galeriaManualidades/Elefante.webp", alt: "Elefante" },
  { id: 10, url: "img/galeriaManualidades/Enderman.webp", alt: "Enderman" },
  { id: 11, url: "img/galeriaManualidades/EnterTheGungeon.webp", alt: "Enter the Gungeon" },
  { id: 12, url: "img/galeriaManualidades/EzioDeadpool.webp", alt: "Ezio Deadpool" },
  { id: 13, url: "img/galeriaManualidades/GatoConGafas.webp", alt: "Gato con gafas" },
  { id: 14, url: "img/galeriaManualidades/Huevo.webp", alt: "Huevo" },
  { id: 15, url: "img/galeriaManualidades/KatanaZero.webp", alt: "Katana Zero" },
  { id: 16, url: "img/galeriaManualidades/LoL.webp", alt: "League of Legends" },
  { id: 17, url: "img/galeriaManualidades/Naruto.webp", alt: "Naruto" },
  { id: 18, url: "img/galeriaManualidades/Nirvana.webp", alt: "Nirvana" },
  { id: 19, url: "img/galeriaManualidades/Oso.webp", alt: "Oso" },
  { id: 20, url: "img/galeriaManualidades/Overwatch.webp", alt: "Overwatch" },
  { id: 21, url: "img/galeriaManualidades/Papypus.webp", alt: "Papypus" },
  { id: 22, url: "img/galeriaManualidades/Poros.webp", alt: "Poros" },
  { id: 23, url: "img/galeriaManualidades/RanaVaquera.webp", alt: "Rana vaquera" },
  { id: 24, url: "img/galeriaManualidades/Spiderman.webp", alt: "Spiderman" },
  { id: 25, url: "img/galeriaManualidades/SpidermanCubito.webp", alt: "Spiderman cubito" }
];

function GaleriaManualidades() {
  return (
    <>
    <div className="galeria">
      {imgGaleriaGeneral.map((img) => (
        
        <img
          key={img.id}
          src={img.url}
          alt={img.alt}
          loading="lazy"
          className="galeria-img"
        />
      ))}
    </div>
    </>
  );
}
export default GaleriaManualidades;
