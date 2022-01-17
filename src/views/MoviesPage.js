//created by Irina Shushkevych
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { fetchSearchMovies } from "../services/api";
import { onError, onWarning } from "../services/messages";
import MovieList from "../components/MovieList/MovieList";
import Searchbar from "../components/Searchbar";

export default function MoviesPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search).get("query") ?? "";
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const onSetQuery = (val) => {
    if (val !== query) {
      setMovies([]);
      setPage(1);
      navigate({ ...location, search: `query=${val}` });
    }
  };

  const setNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (query === "") {
      setMovies([]);
      return;
    }
    fetchSearchMovies(query, page)
      .then((data) => {
        if (data.results.length === 0) {
          onWarning("No such information");
          return;
        }
        setMovies((prevState) => [...prevState, ...data.results]);
      })
      .catch((error) => {
        onError(error.message);
      });
  }, [query, page]);

  return (
    <>
      <Searchbar onSetQuery={onSetQuery} />
      {movies && <MovieList list={movies} onNextPage={setNextPage} />}
    </>
  );
}
