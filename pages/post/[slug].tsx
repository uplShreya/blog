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
    <div className="p-5 bg-gradient-to-r from-pink-200 to-yellow-200">
      <Link href="/">
        <button className="border border-cyan-700 rounded-full px-5 py-1 mb-5 hover:bg-cyan-600 hover:text-white">
          Go Back
        </button>
      </Link>
      <div>
        <p className="py-5 text-cyan-800 font-bold text-xl">{posts?.title}.</p>
        <div className="text-gray-700 text-[14px] leading-10 w-full" dangerouslySetInnerHTML={{ __html: posts?.html }}></div>
      </div>
    </div>
  )
}