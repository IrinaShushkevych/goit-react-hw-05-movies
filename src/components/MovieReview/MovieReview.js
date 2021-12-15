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

  return (
    <>
      {movie.results &&
        movie.results.map((el) => {
          return (
            <div key={el.id}>
              <h2>{el.author}</h2>
              <p>
                {" "}
                <a href={el.url} target="_blank" rel="noreferrer">
                  Review all
                </a>{" "}
              </p>
              <p>{el.content}</p>
            </div>
          );
        })}
    </>
  );
}
