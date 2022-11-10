import Link from 'next/link';
import { useEffect } from 'react'
import BlogDesignIndex from '../src/container';



export default function Home(props:any) {
 
  const {posts} = props
  return (
    
      <div><BlogDesignIndex/></div>
   
  )
}
