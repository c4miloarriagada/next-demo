import { LikeButton } from './LIkeButton';

const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store'
  }).then((res) => res.json());
};

export async function ListOfPOst() {
  const posts = await fetchPosts()
  return posts.slice(0, 10).map((post) => (
    <article style={{ marginBottom: '10px' }} key={post.id}>
      <h2 style={{ color: '#09f' }}>{post.title}</h2>
      <p style={{ marginTop: '5px' }}>{post.body}</p>
      <LikeButton id={post.id} />
    </article>
  ))
}
 