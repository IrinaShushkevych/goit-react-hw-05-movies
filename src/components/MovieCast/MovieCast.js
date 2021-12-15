import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { fetchMovieCredits } from "../../services/api";

export default function MovieCast() {
  const idMovie = useParams().id;
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetchMovieCredits(idMovie).then((data) => {
      console.log(data);
      setMovie(data);
      console.log(movie);
    });
  }, [idMovie]);
  return <h2>Cast</h2>;
}
