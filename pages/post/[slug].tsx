async function getPost(slug:any) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_apiurl}/content/posts/slug/${slug}?key=${process.env.NEXT_PUBLIC_apiKEY}&fields=title,slug,html`)
      .then(res => {
        return res.json();
      })
    const posts = res.posts
    // console.log(posts,"posts")
    return posts
  }
  
  export async function getStaticProps(params:any) {
    const posts = await getPost(params.slug)
    //  console.log(posts,"posts")
    return { 
      props: { posts } ,
      revalidate:10
    }
  }
export const getStaticPaths = () => {
	return {
		paths: [],
		fallback: true
	}
}
  
export default  function  slug(props:any){
    const {posts} = props
    return(
<div>
<h1>{posts?.title}</h1>
			<div dangerouslySetInnerHTML={{ __html: posts?.html }}></div>
</div>
)}