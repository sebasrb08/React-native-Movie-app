export async function getLatestMovies() {
  const LIST_MOVIES =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=b53b30728ee622cb860092e73f1b0f1c";
  
  const rawData = await fetch(LIST_MOVIES);
  const json = await rawData.json();
  
  const { results }= json;
  
  return results.map((result) => {
    const {vote_average, overview, poster_path, title,id } =
    result;
  
    // crea la imagen
    const img = `https://image.tmdb.org/t/p/w500${poster_path}`;
  
    return {
      overview,
      poster_path,
      id,
      title,
      img,
      vote_average
    };
  });
}
export async function getMovieDetails(id) {
  const MOVIE_DETAILS = `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=b53b30728ee622cb860092e73f1b0f1c`;
  const rawData = await fetch(MOVIE_DETAILS);
  const json = await rawData.json();
  
  const { genres, original_title, overview, poster_path } = json
  
  // get the card image
  const img = `https://image.tmdb.org/t/p/w500${poster_path}`;
  
  
  // get the reviews
  const genresReview = genres.map((genre) => {
    const { name } = genre;
    return {name}
});
  return {
    img,
    original_title,
    overview,
    genresReview
  };
}
