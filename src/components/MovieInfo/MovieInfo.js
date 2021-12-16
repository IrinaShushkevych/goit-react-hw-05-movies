import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchMovieDetails } from "../../services/api";

import noImg from "../../images/no-image.jpg";
import { ContainerInfo } from "./ContainerInfo.styled";
import { Image } from "./Image.styled";

export default function MovieInfo() {
  const idMovie = useParams().id;
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetchMovieDetails(idMovie).then((data) => {
      setMovie(data);
    });
  }, [idMovie]);

  const genres = movie.genres
    ? movie.genres.map((el) => el.name).join(", ")
    : [];
  const { poster_path, original_name, original_title, vote_average, overview } =
    movie;
  return (
    <ContainerInfo>
      <Image
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
        <h3>
          Vote average: <span>{vote_average}</span>
        </h3>

        <h3>Genres: </h3>
        <p>{genres}</p>
        <h3>Overview: </h3>
        <p>{overview}</p>
      </div>
    </ContainerInfo>
  );
}
