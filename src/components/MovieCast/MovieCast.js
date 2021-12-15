import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { fetchMovieCredits } from "../../services/api";
import MoviesPage from "../../views/MoviesPage";

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
  return (
    <>
      <h2>Cast</h2>
      <ul>
        {movie.cast &&
          movie.cast.map((el, idx) => {
            return (
              <li key={idx}>
                {el.profile_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
                    width="100"
                  />
                )}
                <h3>{el.name}</h3>
                <h4>{el.character}</h4>
                <p>Popularity: {el.popularity}</p>
              </li>
            );
          })}
      </ul>
      <h2>Crew</h2>
      <ul>
        {movie.crew &&
          movie.crew.map((el, idx) => {
            return (
              <li key={idx}>
                {el.profile_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
                    width="100"
                  />
                )}
                <h3>{el.name}</h3>
                <h4>
                  {el.department}, {el.job}
                </h4>
                <p>Popularity: {el.popularity}</p>
              </li>
            );
          })}
      </ul>
    </>
  );
}
