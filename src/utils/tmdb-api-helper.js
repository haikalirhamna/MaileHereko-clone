export async function getPopularAll() {
  const token = import.meta.env.VITE_TMDB_API_TOKEN;
  if (!token) throw new Error("TMDB API Token is missing!");

  const response = await fetch("https://api.themoviedb.org/3/trending/all/week", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) throw new Error(`Failed to fetch: ${response.statusText}`);

  return response.json();
}

export async function getTvShows(seriesId) {
  const token = import.meta.env.VITE_TMDB_API_TOKEN;
  if (!token) throw new Error("TMDB API Token is missing!");

  const response = await fetch(`https://api.themoviedb.org/3/tv/${seriesId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) throw new Error(`Failed to fetch: ${response.statusText}`);

  return response.json();
}

export async function getMovies(movieId) {
  const token = import.meta.env.VITE_TMDB_API_TOKEN;
  if (!token) throw new Error("TMDB API Token is missing!");

  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) throw new Error(`Failed to fetch: ${response.statusText}`);

  return response.json();
}

export async function getTopRatedMovies(page) {
  const token = import.meta.env.VITE_TMDB_API_TOKEN;
  if (!token) throw new Error("TMDB API Token is missing!");

  const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) throw new Error(`Failed to fetch: ${response.statusText}`);

  return response.json();
}

export async function getTopRatedTV(page) {
  const token = import.meta.env.VITE_TMDB_API_TOKEN;
  if (!token) throw new Error("TMDB API Token is missing!");

  const response = await fetch(`https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=${page}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) throw new Error(`Failed to fetch: ${response.statusText}`);

  return response.json();
}

export async function getSearchMulti(query) {
  const token = import.meta.env.VITE_TMDB_API_TOKEN;
  if (!token) throw new Error("TMDB API Token is missing!");

  const response = await fetch(`https://api.themoviedb.org/3/search/multi?query=${query}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) throw new Error(`Failed to fetch: ${response.statusText}`);

  return response.json();
}

export async function getSearchMovies(query) {
  const token = import.meta.env.VITE_TMDB_API_TOKEN;
  if (!token) throw new Error("TMDB API Token is missing!");

  const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) throw new Error(`Failed to fetch: ${response.statusText}`);

  return response.json();
}

export async function getSearchTv(query) {
  const token = import.meta.env.VITE_TMDB_API_TOKEN;
  if (!token) throw new Error("TMDB API Token is missing!");

  const response = await fetch(`https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=1`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) throw new Error(`Failed to fetch: ${response.statusText}`);

  return response.json();
}
