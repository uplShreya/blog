import { useEffect } from 'react'


export default function Home() {
 
  // async function getPosts() {
  // const res = await fetch(
	// 	`${process.env.NEXT_PUBLIC_apiurl}/content/posts/?key=${process.env.CONTENT_API_KEY}&fields=title,slug,custom_excerpt`
	// ).then((res) => return res.json())

	// const posts = res.posts

	// return posts
  // }

fetch(`${process.env.NEXT_PUBLIC_apiurl}/content/posts/?key=${process.env.NEXT_PUBLIC_apiKEY}`)
.then(data => {
return data.json();
})
  return (
   <div>
    
   </div>
  )
}
