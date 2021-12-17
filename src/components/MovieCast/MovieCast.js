import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { fetchMovieCredits } from "../../services/api";
import { List } from "./List.styled";
import { Item } from "./Item.styled";
import { Title } from "./Title.styled";
import Cast from "../Cast";

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
      <Title>Cast</Title>
      <List>
        {movie.cast &&
          movie.cast.map((el, idx) => {
            return (
              <Item key={idx}>
                <Cast cast={el} />
              </Item>
            );
          })}
      </List>
      <Title>Crew</Title>
      <List>
        {movie.crew &&
          movie.crew.map((el, idx) => {
            return (
              <Item key={idx}>
                <Cast cast={el} />
              </Item>
            );
          })}
      </List>
    </>
  );
}
