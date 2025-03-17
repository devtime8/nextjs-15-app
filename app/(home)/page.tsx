// "use client"

import Link from "next/link"

// import { useEffect, useState } from 'react'; 



export const metadata = {
  title : 'home'
}

  export const API_URL = 'https://api.vercel.app/blog'
   
  async function  getMovies() {
    
    // await new Promise ((res)=> setTimeout(res, 0))
    const data = await fetch(API_URL)
    const posts = await data.json()
    // console.log(`post=${posts[0]}`)
    console.log(posts[0])
    return posts
  }


  // useEffect(() => {
  //   getMovies()
  // }, [])
  
export default async function HomePage(){
  const posts = await getMovies()

 

  return <div>
        {/* {JSON.stringify(posts)} */}
        <ul>


        {
          posts.map(
            (post) => (

              <li key={post.id}>
                <Link href={`/movies/${post.id}`}>
                {post.title} ({post.content})
                </Link>  
              </li>
            )
          )
        }
 
            
        </ul>

      </div>
}