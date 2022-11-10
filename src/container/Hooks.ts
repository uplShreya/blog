import React, { useEffect, useState } from 'react'
import { doGetApiCall } from '../../utils/Apiconfig';

export const BlogHooks = () => {
    const [data, setdata] = useState()

    // async function getPosts() {
    //     const res = await fetch(`${process.env.NEXT_PUBLIC_apiurl}/ghost/api/v3/content/posts/?key=${process.env.NEXT_PUBLIC_apiKEY}&fields=title,slug,custom_excerpt,feature_image`)
    //         .then((res : any) => {
    //             // return res.json();
    //             if (res?.length > 0){
    //                 setdata(res)
    //             }
    //             else{
    //                 console.log("no result")
    //             }

    //         })
        
    // }

    // async function posts(){
    //     const posts =await getPosts()
    //    console.log(posts, "posts")
    // }


    const getPosts = () => {
        let data = {
            url: `${process.env.NEXT_PUBLIC_apiurl}/ghost/api/v3/content/posts/?key=${process.env.NEXT_PUBLIC_apiKEY}&fields=title,slug,custom_excerpt,feature_image`
        };

        doGetApiCall(data)
            .then((res: any) => {
                if (!res.error) {
                    setdata(res)
                }
                else {
                    console.error(res.error);
                }
            })
            .catch((err) => {
                console.error(err, "error");
            });
    }

// useEffect(()=>{
//     getPosts()
// },[])

    return {
        getPosts,
        // posts,
         data
    }


}
