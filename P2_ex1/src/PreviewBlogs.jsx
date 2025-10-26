function PreviewBlogs() {

  const blogs = [
    {
      id: 1,
      image: "img/manualidades/enderman.jpg",
      title: "Cuadro Enderman",
      description: "Buenaaaas! Hoy os traigo un tutorial de como hacer un cuadro acrílico de Enderman",
      type: "tutorial",
      views: 320,
      date: "03/2/2024",
      styleClass: "blog1"

    },
    {
      id: 2,
      image: "img/manualidades/bichoCocacola.jpg",
      title: "Muñeco anilla CocaCola",
      description: "Holiiiiii!! Hoy vamos a hacer muñequitos con las anillas de las CocaCola",
      type: "tutorial",
      views: 220,
      date: "19/3/2024",
      styleClass: "blog2"
    },
    {
      id: 3,
      image: "img/manualidades/spidermanCuadritos.jpg",
      title: "Spiderman de cubitos",
      description: "Hello everynyan :3. En este blog vamos a hacer un Spiderman con cuadritos de madera.",
      type: "Blog",
      views: 110,
      date: "10/1/2024",
      styleClass: "blog3"
    }
  ]

  return (
    <div id="containerMasVisto">
      <h1 className="section-title">Lo más visto</h1>
      <div className="blogs-container">
        {blogs.map((blog) => (
          <div id="blog" key={blog.id} className={blog.styleClass}>
            <img className="imagen" src={blog.image} alt={blog.title} />
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
            <p className="mini-desc">
              <strong>Visitas:</strong> {blog.views}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PreviewBlogs

