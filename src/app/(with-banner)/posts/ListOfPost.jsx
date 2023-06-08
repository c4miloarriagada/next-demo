import Link from 'next/link'
import { LikeButton } from './LIkeButton'

const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store' // no guardar en cache que haga server side rendering , sin esa prop genera el html a la hora de hacer la build de la app, next : { revalidate: 10 } cada 10 segundos hace rehidratacion del html
  }).then((res) => res.json())
}

export async function ListOfPOst() {
  const posts = await fetchPosts()
  return posts.slice(0, 10).map((post) => (
    <article style={{ marginBottom: '10px' }} key={post.id}>
      <Link href='/posts/[id]' as={`/posts/${post.id}`}>
        <h2 style={{ color: '#09f' }}>{post.title}</h2>
      </Link>
      <p style={{ marginTop: '5px' }}>{post.body}</p>
      <LikeButton id={post.id} />
    </article>
  ))
}
