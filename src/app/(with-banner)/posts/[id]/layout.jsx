import Link from 'next/link'

const fetchSinglePost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60
    } // no guardar en cache que haga server side rendering , sin esa prop genera el html a la hora de hacer la build de la app, next : { revalidate: 10 } cada 10 segundos hace rehidratacion del html
  }).then((res) => res.json())
}

export default async function Post({ children, params }) {
  const { id } = params
  const post = await fetchSinglePost(id)
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href={`/posts/${id}/comments`}>Ver comentarios</Link>

      {children}
    </article>
  )
}
