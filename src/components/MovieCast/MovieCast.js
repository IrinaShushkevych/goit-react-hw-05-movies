import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { fetchMovieCredits } from "../../services/api";
import { List } from "./List.styled";
import { Item } from "./Item.styled";
import { Image } from "./Img.styled";
import noImg from "../../images/unnamed.jpg";

export default function MovieCast() {
  const idMovie = useParams().id;
  const [movie, setMovie] = useState({});
  console.log(movie);
  useEffect(() => {
    fetchMovieCredits(idMovie).then((data) => {
      setMovie(data);
    });
  }, [idMovie]);
  return (
    <>
      <h2>Cast</h2>
      <List>
        {movie.cast &&
          movie.cast.map((el, idx) => {
            return (
              <Item key={idx}>
                <Image
                  src={
                    el.profile_path
                      ? `https://image.tmdb.org/t/p/w500${el.profile_path}`
                      : noImg
                  }
                  width="100"
                  alt={el.name}
                />
                <h3>{el.name}</h3>
                <h4>{el.character}</h4>
                <p>Popularity: {el.popularity}</p>
              </Item>
            );
          })}
      </List>
      <h2>Crew</h2>
      <List>
        {movie.crew &&
          movie.crew.map((el, idx) => {
            if (!el.profile_path) console.log(noImg);
            return (
              <Item key={idx}>
                <Image
                  src={
                    el.profile_path
                      ? `https://image.tmdb.org/t/p/w500${el.profile_path}`
                      : noImg
                  }
                  width="100"
                  alt={el.name}
                />

                <h3>{el.name}</h3>
                <h4>
                  {el.department}, {el.job}
                </h4>
                <p>Popularity: {el.popularity}</p>
              </Item>
            );
          })}
      </List>
    </>
  );
}
