import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { fetchMovieReviews } from "../../services/api";

export default function MovieReview() {
  const idMovie = useParams().id;
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetchMovieReviews(idMovie).then((data) => {
      console.log(data);
      setMovie(data);
      console.log(movie);
    });
  }, [idMovie]);

  return <h2>Review</h2>;
}
