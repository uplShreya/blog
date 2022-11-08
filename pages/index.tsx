import Link from 'next/link';
import { useEffect } from 'react'

async function getPosts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_apiurl}/content/posts/?key=${process.env.NEXT_PUBLIC_apiKEY}&fields=title,slug,custom_excerpt`)
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
    <div className='flex flex-col justify-center h-screen items-center bg-gradient-to-r from-pink-200 to-yellow-200'>
      <p className='text-3xl text-cyan-700 font-bold py-5 underline'>Welcome to my Blog</p>
      <ul className='list-disc text-cyan-700'>
      {posts?.map((item:any, index:number) => {
        return (
          <li  className='my-2' key={index}>
            <Link href="/post/[slug]" as={`/post/${item.slug}`}>
              <p className=' text-sm text-gray-700'>{item.title}</p>
              {/* <p>{item.html}</p> */}
            </Link>
          </li>
        )
      })}
    </ul>
    </div>
  )
}
