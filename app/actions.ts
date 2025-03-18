// 'use server'




export async function incrementLike(likes: number) { 




  // Update data
  // Revalidate cache
  return likes+1
}


export async function createPost(formData: FormData) {
  const title = formData.get("title");
  const content = formData.get("content");

  // Update data
  // Revalidate cache
}

export const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
};

export const fetchMovies = async ({
  query,
}: {
  query: string;
}): Promise<Movie[]> => {
  const endpoint = query
    ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

  const response = await fetch(endpoint, {
    method: "GET",
    headers: TMDB_CONFIG.headers,
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch movies: ${response.statusText}`);
  }

  const data = await response.json();
  return data.results;
};

export const fetchMovieDetails = async (
  movieId: string
): Promise<MovieDetails> => {
  try {
    const response = await fetch(
      `${TMDB_CONFIG.BASE_URL}/movie/${movieId}?api_key=${TMDB_CONFIG.API_KEY}`,
      {
        method: "GET",
        headers: TMDB_CONFIG.headers,
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch movie details: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};

export const getVideos = async (movieId: string): Promise<Video> => {
  try {
    const response = await fetch(
      // `${TMDB_CONFIG.BASE_URL}/movie/${movieId}/videos?language=en-US`,
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      {
        method: "GET",
        headers: TMDB_CONFIG.headers,
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch movie details: ${response.statusText}`);
    }

    const data = await response.json();

    // console.log('ㅁ■■■■■ data=', data)

    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};

export const API_URL = "https://api.vercel.app/blog";

export const getBlogs = async () => {
  // await new Promise ((res)=> setTimeout(res, 0))
  const data = await fetch(API_URL);
  const posts = await data.json();
  // console.log(`post=${posts[0]}`)
  console.log(posts[0]);
  return posts;
};
