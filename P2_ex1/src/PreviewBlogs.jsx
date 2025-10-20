function PreviewBlogs() {

  const blogs = [
    {
      id: 1,
      image: "https://i.pinimg.com/736x/bd/bf/fe/bdbffee9cc9aa8dea000860d9a7b4ed1.jpg",
      title: "Cuadro Enderman",
      description: "Buenaaaas!, hoy os traigo un tutorial de como hacer un cuadro acrílico de Enderman",
      type: "tutorial",
      views: 320,
      date: "03/2/2024"

    },
    {
      id: 2,
      image: "https://i.pinimg.com/736x/ae/bb/a8/aebba86dfe8fa3e7b0fc9392d3a692a6.jpg",
      title: "Muñeco anilla CocaCola",
      description: "Holiiiiii!! Hoy vamos a hacer muñequitos con las anillas de las CocaCola",
      type: "tutorial",
      views: 220,
      date: "19/3/2024"
    },
    {
      id: 3,
      image: "https://i.pinimg.com/736x/e1/f4/32/e1f4329a83be634609b5bcba001728e5.jpg",
      title: "Unboxing materiales pulseras",
      description: "Hello everynyan :3. En este blog vamos a hacer un unboxing de Shein.",
      type: "Blog",
      views: 110,
      date: "10/1/2024"
    }
  ]

  return (
 
      <div>
        {blogs.map((blog) => (
          <div key={blog.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
            <img src={blog.image} alt={blog.title} style={{ width: "200px", height: "auto" }} />
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
            <p><strong>Tipo:</strong> {blog.type}</p>
            <p><strong>Vistas:</strong> {blog.views}</p>
            <p><strong>Fecha:</strong> {blog.date}</p>
          </div>
        ))}
      </div>

  )
}

export default PreviewBlogs

