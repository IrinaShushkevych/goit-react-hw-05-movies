import { Image } from "./Img.styled";
import { Title, TitleParagraph, Text } from "./Title.styled";
import { CardInfo, CardIImage } from "./CardInfo.styled";
import noImg from "../../images/unnamed.jpg";

export default function Cast({ cast }) {
  return (
    <>
      <CardIImage>
        <Image
          src={
            cast.profile_path
              ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
              : noImg
          }
          width="100"
          alt={cast.name}
        />
      </CardIImage>
      <CardInfo>
        <Title>{cast.name}</Title>
        {cast.character && <TitleParagraph>{cast.character}</TitleParagraph>}
        {cast.department && (
          <TitleParagraph>
            {cast.department}, {cast.job}
          </TitleParagraph>
        )}
        <TitleParagraph>
          Popularity: <Text>{cast.popularity}</Text>
        </TitleParagraph>
      </CardInfo>
    </>
  );
}
