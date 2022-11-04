import Link from "next/link";

async function getPost(slug: any) {
  console.log(slug, "<<-- slug")
  const res = await fetch(`${process.env.NEXT_PUBLIC_apiurl}/content/posts/slug/${slug}?key=${process.env.NEXT_PUBLIC_apiKEY}&fields=title,slug,html`)
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
  const { posts } = props
  return (
    <div>
      <Link href="/">Go Back</Link>
    <div>
      <h1>{posts?.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: posts?.html }}></div>
    </div>
    </div>
  )
}