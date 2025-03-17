"use client"

import Link from "next/link";

import styles from '../styles/movie.module.css'
import { useRouter } from "next/navigation";

export default function MovieCard({movie} :{movie: Movie} ){

  const router = useRouter()
  const onClick =()=>{
    router.push(`/movies/${movie.id}`)
  }

    return  <div key={movie.id} className={styles.movie}>
    <img onClick={onClick}
    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
    alt={movie.title}  />
    <Link href={`/movies/${movie.id}`}>{movie.title} </Link>  
  </div>
}