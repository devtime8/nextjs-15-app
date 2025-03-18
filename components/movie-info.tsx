import { notFound } from "next/navigation";
import { fetchMovieDetails } from "../app/actions";

import potato  from "../styles/movie-info.module.css";

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
  // console.log(movie);

  return (
    <div className={potato .container}>
      {/* <h1>{movie.original_title}  -----------movie-info</h1> */}
      {/* <img 
        className={potato.poster}
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={movie.title}
      /> */}
      <img
      className={potato.poster}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />


    <div className={potato.info}>
         <h1 className={potato.title}>{movie.title}</h1>
         <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
         <p>{movie.overview}</p>

          {
            movie.homepage ?
            (
          <a href={movie.homepage} target={"_blank"}>
          Homepage &rarr;
        </a>
            )
            :
            (
              <h1>none homepage</h1>
            )
          }
       </div>
       {/* <div className={potato.abs}> */}
          {/* {JSON.stringify(movie)} */}
       {/* </div> */}
    </div>
  );
}
