//created by Irina Shushkevych
import { useState, useEffect } from "react";

import { fetchTrendidngMovies } from "../services/api";
import { onError } from "../services/messages";

import MovieList from "../components/MovieList/MovieList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const setNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    fetchTrendidngMovies(page)
      .then((data) => {
        setMovies((prevState) => [...prevState, ...data.results]);
      })
      .catch((error) => {
        onError(error.message);
      });
  }, [page]);

  return <>{movies && <MovieList list={movies} onNextPage={setNextPage} />}</>;
}
