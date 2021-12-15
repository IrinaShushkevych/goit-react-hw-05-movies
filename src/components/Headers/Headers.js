import { NavLink } from "react-router-dom";
import s from "./Headers.module.css";
import { List } from "./List.styled";
import { Item } from "./Item.styled";

export default function Headers() {
  return (
    <List>
      <Item>
        <NavLink
          exact="true"
          to="/"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          Home
        </NavLink>
      </Item>
      <Item>
        <NavLink
          to="/movies"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          Movies
        </NavLink>
      </Item>
    </List>
  );
}
