import Counter from './posts/Counter'

export default function PostLayout({ children }) {
  // es posible ejecutar componentes en el lado del servidor , mantentiendo el estado hasta que se cambie el layout

  return (
    <div>
      <marquee> Aprendiendo Nextjs</marquee>
      <Counter />
      {children}
    </div>
  )
}
