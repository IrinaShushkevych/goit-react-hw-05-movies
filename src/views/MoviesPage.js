import { useState, useEffect } from "react";
import { fetchSearchMovies } from "../services/api";
import MovieList from "../components/MovieList/MovieList";
import Searchbar from "../components/Searchbar";

export default function MoviesPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const onSetQuery = (val) => {
    if (val !== query) {
      setQuery(val);
      setMovies([]);
    }
  };

  useEffect(() => {
    if (query === "") {
      setMovies([]);
      return;
    }
    fetchSearchMovies(query).then((data) => {
      setMovies([...movies, ...data.results]);
    });
  }, [query]);

  return (
    <>
      <Searchbar onSetQuery={onSetQuery} />
      {movies && <MovieList list={movies} />}
    </>
  );
}
