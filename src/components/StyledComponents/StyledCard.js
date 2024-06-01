import styled from "styled-components";
import media from "./media";

const StyledCard = styled.div`
  background-color: ${props => (props.theme === "dark" ? "yellow" : "#e0ffe0")};
  max-width: 200px;
  display: flex;
  justify-content: center;
  align-items: stretch;
  cursor: pointer;
  padding: 8px;
  img {
    object-fit: contain;
    width: 100%;
    pointer-events: none;
  }
  &:hover {
    filter: brightness(0.95);
  }
  transition: filter 150ms ease;

  ${media.large`
  padding: 6px;
  `}
  ${media.medium`
  padding: 4px;
  `}
  ${media.medium`
  padding: 2px;
  `}
`;

export default StyledCard;
