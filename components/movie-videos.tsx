import { notFound } from "next/navigation";
import { API_URL } from "../app/(home)/page";

import styles from "../styles/movie-videos.module.css";

interface Post {
  id: string;
  title: string;
  content: string;
  error?: string;
}

async function getPost(id: string) {
  // await new Promise ((res)=> setTimeout(res, 5000))
  const res = await fetch(`${API_URL}/${id}`, {
    //   cache: 'force-cache',
  });
  const post: Post = await res.json();

  console.log(`■■■ id=${id}`);
  console.log(`■■■ post=${post}`);
  console.log(`■■■ post=${JSON.stringify(post)}`);
  if (!post) notFound();
  if (post.error) {
    console.log(post.error);
  }

  return post;
}

export default async function MovieVideos({ id }: { id: string }) {
  const post = await getPost(id);

  return (
    <div className={styles.container}>
      <h1>movie id={id}</h1>
      <article>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </article>
    </div>
  );
}
