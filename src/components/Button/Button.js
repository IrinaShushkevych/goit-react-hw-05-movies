import { Button } from "./Button.styled";

export default function OwnButton({ children, onClick }) {
  return <Button onClick={onClick}>{children}</Button>;
}
