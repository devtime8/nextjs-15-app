import { notFound } from "next/navigation"
import { API_URL } from "../../../(home)/page"
import MovieVideos from "../../../../components/movie-videos"
import MovieInfo from "../../../../components/movie-info"
import { Suspense } from "react"
import BlogInfo from "../../../../components/blog-info"
interface Post {
    id: string
    title: string
    content: string
    error?: string
  }
   

export default async  function BlogDetail(
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
                    <h1>blog id={id}</h1>
                    {/* <Suspense fallback={<div>Loading... videos</div>}>
                        <MovieVideos  id={id}/>
                    </Suspense> */}
                    <Suspense fallback={<div>Loading...blog ...  info</div>}>
                        <BlogInfo  id={id}/> 
                    </Suspense>
        </div>
    )
}