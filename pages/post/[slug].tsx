import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

async function getPost(slug: any) {
  console.log(slug, "<<-- slug")
  const res = await fetch(`${process.env.NEXT_PUBLIC_apiurl}/ghost/api/v3/content/posts/slug/${slug}?key=${process.env.NEXT_PUBLIC_apiKEY}&fields=title,slug,html,feature_image,codeinjection_head`)
    .then(res => {
      return res.json();
    })
  const posts = res.posts
  return posts
}

export async function getServerSideProps(ctx: any) {
  const posts = await getPost(ctx.query.slug)
  //  console.log(posts,"posts")
  return {
    props: { posts: posts[0] },
    // revalidate:10
  }
}
// export const getStaticPaths = () => {
// 	return {
// 		paths: [],
// 		fallback: true
// 	}
// }

export default function slug(props: any) {
  const [blank,setblank]=useState(false);

  const { posts } = props
  // console.log("posts", posts)
  let data=`${posts.codeinjection_head}${posts.html}`
  return (
    <div>
      <Link href="/">Go Back</Link>
    <div>
      <h1>{posts?.title}</h1>
      <div>
        {posts?.feature_image === null ?  
        <></>     
          :
          <Image src={posts?.feature_image} alt="featureimage" height={100} width={100}/>

        }
      </div>
      {/* <div>
        <Image src={posts?.feature_image === null ? {}:posts?.feature_image} alt="featureimage" height={100} width={100}/>
      </div> */}
      <div dangerouslySetInnerHTML={{ __html: data }}></div>
      
    </div>
    </div>
  )
}