import { notFound } from "next/navigation";

import styles from "../styles/movie-videos.module.css";

import { getVideos } from "../app/actions";
 

export default async function MovieVideos({ id }: { id: string }) {
  const video = await getVideos(id);

  console.log('video=', video)
 

  // return <h6>{JSON.stringify(videos)}</h6>;


   return (
     <div className={styles.container}>
       {video.results.map((video) => (
         <iframe
           key={video.id}
           src={`https://youtube.com/embed/${video.key}`}
           title={video.name}
          //  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          //  allowFullScreen
         />
         
       ))}
     </div>
 
  );




}
