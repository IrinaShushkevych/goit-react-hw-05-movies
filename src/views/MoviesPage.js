import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { fetchSearchMovies } from "../services/api";
import { onError } from "../services/messages";
import MovieList from "../components/MovieList/MovieList";
import Searchbar from "../components/Searchbar";

export default function MoviesPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search).get("query") ?? "";
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
    fetchSearchMovies(query)
      .then((data) => {
        console.log(data);
        setMovies((prevState) => [prevState, ...data.results]);
      })
      .catch((error) => {
        onError(error.message);
      });
  }, [query]);

  return (
    <>
      <Searchbar onSetQuery={onSetQuery} />
      {movies && <MovieList list={movies} />}
    </>
  );
}
