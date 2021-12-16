import PropTypes from "prop-types";
import { List } from "./List.styled";
import MoviesCard from "../MoveCard";
import { Item } from "./Item.styled";

export default function MovieList({ list }) {
  return (
    <List>
      {list.map((el) => (
        <Item key={el.id}>
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