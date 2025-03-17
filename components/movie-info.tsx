import { notFound } from "next/navigation";
import { API_URL } from "../app/(home)/page";
import { fetchMovieDetails } from "../app/actions";

import styles from "../styles/movie-info.module.css";

// interface Post {
//     id: string
//     title: string
//     content: string
//     error?: string
//   }

// async function getPost(id: string) {

//     // await new Promise ((res)=> setTimeout(res, 5000))
//     const res = await fetch(`${API_URL}/${id}`, {
//     //   cache: 'force-cache',
//     })
//     const post: Post = await res.json()

//     console.log(`■■■ id=${id}`)
//     console.log(`■■■ post=${post}`)
//     console.log(`■■■ post=${JSON.stringify(post)}`)
//     if (!post  ) notFound()
//     if (post.error) {
//         console.log(post.error)
//     }

//     return post
//   }

export default async function MovieInfo({ id }: { id: string }) {
  // const post = await getPost(id)
  const movie = await fetchMovieDetails(id);
  console.log(movie);

  return (
    <div className={styles.container}>
      <h1>{movie.original_title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={movie.title}
      />
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
    </div>
  );
}
