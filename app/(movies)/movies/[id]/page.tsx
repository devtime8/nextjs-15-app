import { notFound } from "next/navigation"
import { API_URL } from "../../../(home)/page"
import MovieVideos from "../../../../components/movie-videos"
import MovieInfo from "../../../../components/movie-info"
import { Suspense } from "react"
interface Post {
    id: string
    title: string
    content: string
    error?: string
  }
   

export default async  function MovieDetail(
    {
        params
    } 
    : 
    {
        params: Promise<{ id: string }>
    }
){ 
    const { id } = await params 

    return (
        <div> 
                    <h1>movie id={id}</h1>
                    <Suspense fallback={<div>Loading... videos</div>}>
                        <MovieVideos  id={id}/>
                    </Suspense>
                    <Suspense fallback={<div>Loading... info</div>}>
                        <MovieInfo  id={id}/> 
                    </Suspense>
        </div>
    )
}