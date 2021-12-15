import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchMovieDetails } from "../../services/api";

import noImg from "../../images/no-image.jpg";
import { ContainerInfo } from "./ContainerInfo.styled";

export default function MovieInfo() {
  const idMovie = useParams().id;
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetchMovieDetails(idMovie).then((data) => {
      setMovie(data);
      console.log(movie);
    });
  }, [idMovie]);

  const genres = movie.genres
    ? movie.genres.map((el) => el.name).join(", ")
    : [];
  const { poster_path, original_name, original_title, vote_average, overview } =
    movie;
  return (
    <ContainerInfo>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : noImg
        }
        alt={movie.original_name ? original_name : original_title}
        width="200"
      />
      <div>
        <h1>{original_name ? original_name : original_title}</h1>
        <h2>Vote average: </h2>
        <p>{vote_average}</p>

        <h2>Genres: </h2>
        <p>{genres}</p>
        <h2>Overview: </h2>
        <p>{overview}</p>
      </div>
    </ContainerInfo>
  );
}
