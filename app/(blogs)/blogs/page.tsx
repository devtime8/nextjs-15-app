// "use client"

import Link from "next/link"

// import { useEffect } from 'react';
// import { useState } from 'react';

export default async function Page() {


    // const [isLoading, setIsLoading] = useState(true)
    // const [movies, setMovies] = useState([])
    // const getMovies = async ()=>{
        console.log('getMovies called.................')
        const data = await fetch('https://api.vercel.app/blog')
        const posts = await data.json()
        // console.log(posts)
        // setMovies(posts)
        // setIsLoading(false)
    // }

    // getMovies()

// useEffect(()=>{
//     getMovies()
// },[])

    return (
      <ul>
        {/* {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))} */} 
        {/* {JSON.stringify(posts)} */}
 
        {
          posts.map(
            (post) => (

              <li key={post.id}>
                <Link href={`/blogs/${post.id}`}>
                {post.title} ({post.content})
                </Link>  
              </li>
            )
          )
        } 
      </ul>
    )
  }