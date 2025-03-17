// "use client"

import styles from '../../styles/home.module.css'

import Link from "next/link"
import useFetch from "../../usefetch"
import { fetchMovies } from "../actions"
import Movie from "../../components/movie-card"

// import { useEffect, useState } from 'react';  

export const metadata = {
  title : 'home'
}

  export const API_URL = 'https://api.vercel.app/blog'
   
  async function  getBlogs() {
    
    // await new Promise ((res)=> setTimeout(res, 0))
    const data = await fetch(API_URL)
    const posts = await data.json()
    // console.log(`post=${posts[0]}`)
    console.log(posts[0])
    return posts
  }

  // useEffect(() => {
  //   getBlogs()
  // }, [])
  
export default async function HomePage(){

  const posts = await getBlogs()
  const movies = await fetchMovies({ query: "" });

  return <div>
        {/* {JSON.stringify(posts)} */}
        {/* {JSON.stringify(movies)} */}
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
        <div className={styles.container}>

        { movies.map((movie) => (
              <Movie key={movie.id}  movie={ movie  }/>
            ))}
        </div>
            
      </div>
}