import PropTypes from "prop-types";
import { List } from "./List.styled";
import MoviesCard from "../MoveCard";
import { Item } from "./Item.styled";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function MovieList({ list, onNextPage }) {
  const [ref, inView] = useInView({
    ttriggerOnce: true,
    rootMargin: "-50px",
  });

  useEffect(() => {
    if (inView) {
      console.log("next ");
      onNextPage();
    }
  }, [inView]);

  return (
    <List>
      {list.map((el, idx) => (
        <Item key={el.id} ref={idx === list.length - 1 ? ref : null}>
          <MoviesCard movie={el} />
        </Item>
      ))}
    </List>
  );
}

MovieList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
