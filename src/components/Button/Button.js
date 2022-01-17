//created by Irina Shushkevych
import PropTypes from "prop-types";
import { Button } from "./Button.styled";

export default function OwnButton({ children, onClick }) {
  return <Button onClick={onClick}>{children}</Button>;
}

OwnButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
