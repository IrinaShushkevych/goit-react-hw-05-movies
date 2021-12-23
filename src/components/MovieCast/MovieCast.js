import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { fetchMovieCredits } from "../../services/api";
import { onWarning } from "../../services/messages";
import Cast from "../Cast";
import { List } from "./List.styled";
import { Item } from "./Item.styled";
import { Title } from "./Title.styled";

export default function MovieCast() {
  const idMovie = useParams().id;
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetchMovieCredits(idMovie)
      .then((data) => {
        if (data.cast.length === 0) {
          onWarning("No such information");
          return;
        }
        setMovie(data);
      })
      .catch((error) => {
        onWarning(error.message);
      });
  }, [idMovie]);

  return (
    <>
      {movie.cast && movie.cast.length !== 0 && (
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
      )}
    </>
  );
}
