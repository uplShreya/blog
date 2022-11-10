import React, { useEffect } from 'react'
import BlogDesign from '../components/BlogDesign'
import { BlogHooks } from './Hooks'

const BlogDesignIndex = () => {
const {getPosts , data} =BlogHooks()

useEffect(() => {
    getPosts()
}, [])

  return (
    <div><BlogDesign data={data}/></div>
  )
}

export default BlogDesignIndex