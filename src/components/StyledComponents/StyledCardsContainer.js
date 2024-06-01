import styled from "styled-components";
import media from "./media";

const StyledCardsContainer = styled.div`
  display: grid;
  grid-template-columns: ${props => `repeat(${props.width}, 1fr)`};
  grid-auto-rows: minmax(150px, 150px);
  grid-gap: 4px;

  ${media.large`
  grid-auto-rows: minmax(120px, 120px);
  `}
  ${media.medium`
  grid-auto-rows: minmax(100px, 110px);
  `}
  ${media.small`
  grid-auto-rows: minmax(90px, 90px);
  `}
`;

export default StyledCardsContainer;
