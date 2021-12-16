import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { fetchSearchMovies } from "../services/api";
import MovieList from "../components/MovieList/MovieList";
import Searchbar from "../components/Searchbar";

export default function MoviesPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search).get("query");
  const [movies, setMovies] = useState([]);

  const onSetQuery = (val) => {
    if (val !== query) {
      setMovies([]);
      navigate({ ...location, search: `query=${val}` });
    }
  };

  useEffect(() => {
    if (query === "") {
      setMovies([]);
      return;
    }
    fetchSearchMovies(query).then((data) => {
      setMovies((prevState) => [prevState, ...data.results]);
    });
  }, [query]);

  return (
    <>
      <Searchbar onSetQuery={onSetQuery} />
      {movies && <MovieList list={movies} />}
    </>
  );
}
