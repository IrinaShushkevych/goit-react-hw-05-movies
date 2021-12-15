import { Link } from "react-router-dom";
import { Image } from "./Img.styled";
import noImg from "../../images/no-image.jpg";
import { Title } from "./Title.styled";

export default function MovieCard({ movie }) {
  return (
    <Link to={`/movies/${movie.id}`}>
      <Image
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : noImg
        }
        alt={movie.original_name ? movie.original_name : movie.original_title}
      ></Image>
      <Title>
        {movie.original_name ? movie.original_name : movie.original_title}
      </Title>
    </Link>
  );
}
