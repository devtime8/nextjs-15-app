import { notFound } from "next/navigation";
import MovieVideos from "../../../../components/movie-videos";
import MovieInfo from "../../../../components/movie-info";
import { Suspense } from "react";
import { title } from "process";
import { fetchMovieDetails } from "../../../actions";

 
export async function generateMetadata({
    params,
  }: {
    params: Promise<{ id: string }>;
  }) {
    const { id } = await params;
  const movie: MovieDetails = await fetchMovieDetails(id);

  return {
    title: movie.title,
  };
}

export default async function MovieDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div>
      {/* <h1>movie id={id}</h1> */}
      <h3>Movie detail page</h3>
      <Suspense fallback={<div>Loading.. movie .... info</div>}>
        <MovieInfo id={id} />
      </Suspense>

      <Suspense fallback={<div>Loading... videos</div>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
