import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const keyAPI = "api_key=a907caf8c46067564d1786718be1cb84";

const fetching = (url) => {
  return axios.get(url).then((response) => {
    if (response.status === 200) {
      return response.data;
    } else {
      Promise.reject(new Error("No such information"));
    }
  });
};

export const fetchTrendidngMovies = (page) => {
  const url = `${BASE_URL}/trending/all/week?page=${page}&${keyAPI}`;
  return fetching(url);
};

export const fetchSearchMovies = (query, page) => {
  const url = `${BASE_URL}/search/movie?query=${query}&page=${page}&${keyAPI}`;
  return fetching(url);
};

export const fetchMovieDetails = (id) => {
  const url = `${BASE_URL}/movie/${id}?${keyAPI}`;
  return fetching(url);
};

export const fetchMovieCredits = (id) => {
  const url = `${BASE_URL}/movie/${id}/credits?${keyAPI}`;
  return fetching(url);
};

export const fetchMovieReviews = (id) => {
  const url = `${BASE_URL}/movie/${id}/reviews?${keyAPI}`;
  return fetching(url);
};

// /trending/get-trending список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// /search/search-movies поиск кинофильма по ключевому слову на странице фильмов.
// /movies/get-movie-details запрос полной информации о фильме для страницы кинофильма.
// /movies/get-movie-credits запрос информации о актёрском составе для страницы кинофильма.
// /movies/get-movie-reviews запрос обзоров для страницы кинофильма.
