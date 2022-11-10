import Link from 'next/link'
import React from 'react'
import { BlogHooks } from '../container/Hooks'


const BlogDesign = (props:any) => {
  
  return (
    <div>
      <h1>Hello to my blog</h1>
      <ul>
      {props.posts?.map((item:any, index:number) => {
        //   console.log(item , "post")
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

export default BlogDesign