const fetchComments = async(id) => {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60
    } // no guardar en cache que haga server side rendering , sin esa prop genera el html a la hora de hacer la build de la app, next : { revalidate: 10 } cada 10 segundos hace rehidratacion del html
  }).then((res) => res.json())
}

export default async function Comments({ params }) {
  const { id } = params
  const comments = await fetchComments(id)

  return (
    <ul style={{ backgroundColor: '#444', color: 'white' }}>
      {comments.map((comments) => (
        <li key={comments.id}>
          <h4>{comments.name}</h4>
          <small>{comments.body}</small>
        </li>
      ))}
    </ul>
  )
}
