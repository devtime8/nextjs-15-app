// "use client"

import styles from '../../styles/home.module.css'

import Link from "next/link"
import useFetch from "../../usefetch"
import { fetchMovies, getBlogs } from "../actions"
import Movie from "../../components/movie-card"

// import { useEffect, useState } from 'react';  

export const metadata = {
  title : 'home'
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
 
        <div className={styles.container}>

        { movies.map((movie) => (
              <Movie key={movie.id}  movie={ movie  }/>
            ))}
        </div>
            
      </div>
}