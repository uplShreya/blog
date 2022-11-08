import Link from 'next/link';
import { useEffect } from 'react'

async function getPosts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_apiurl}/ghost/api/v3/content/posts/?key=${process.env.NEXT_PUBLIC_apiKEY}&fields=title,slug,custom_excerpt,feature_image`)
    .then(res => {
      return res.json();
    })
  const posts = res.posts
  return posts
}

export async function getServerSideProps() {
  const posts = await getPosts()
  // console.log(posts,"posts")
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
            <Link href="/post/[slug]" as={`/post/${item.slug}`}>
              <p>{item.title}</p>
              {/* <p>{item.html}</p> */}
            </Link>
          </li>
        )
      })}
    </ul>
    </div>
  )
}
