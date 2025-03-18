import { notFound } from "next/navigation";

import styles from "../styles/movie-videos.module.css";

import { getVideos } from "../app/actions";
 

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);

  console.log('videos=', videos)
 

  // return <h6>{JSON.stringify(videos)}</h6>;
  // const iframeObj ={
  //   key:video.id,
  //   src:`https://youtube.com/embed/${video.key}`,
  //   title:video.name,
  //   allowFullScreen: 'allowFullScreen'
  // }

   return (
     <div className={styles.container}>
       {videos.map((video) => (
         <iframe
           key={video.id}
           src={`https://youtube.com/embed/${video.key}`}
           title={video.name}
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
           allowFullScreen

          // ...iframeObj
         />
         
       ))}
     </div>
 
  );




}
// const iframeProps = {
//   id: "ytplayer",
//   type: "text/html",
//   width: "720",
//   height: "405",
//   src: "https://www.youtube.com/embed/cgdne04i99I",
//   frameborder: "0",
//   allowfullscreen: "allowfullscreen",
// };
// export default function Main() {
//   return (
//     <div>
//       <iframe {...iframeProps}></iframe>
//     </div>
//   );
// }