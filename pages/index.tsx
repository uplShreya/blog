import Link from 'next/link';
import { useEffect } from 'react'

async function getPosts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_apiurl}/content/posts/?key=${process.env.NEXT_PUBLIC_apiKEY}`)
    .then(res => {
      return res.json();
    })
  const posts = res.posts
  return posts
}

export async function getServerSideProps() {
  const posts = await getPosts()
  return { 
    props: { posts } 
  }
}

export default function Home(props:any) {
 
  const {posts} = props
  return (
    <div>
      <h1>Hello to my blog</h1>
      <ul>
      {posts?.map((item:any, index:number) => {
        return (
          <li  key={index}>
            {/* <Link href="/post/[slug]" as={`/post/${item.slug}`}> */}
              <div>{item.title}</div>
            {/* </Link> */}
          </li>
        )
      })}
    </ul>
    </div>
  )
}
