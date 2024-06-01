import styled from "styled-components";
import media from "./media";

const StyledBorderedContainer = styled.div`
  border-radius: 8px;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme }) => (theme === "dark" ? "yellow" : "#23272f")};
  width: ${({ width }) => (width ? `${width}` : "auto")};
  padding: 4px;
  gap: 8px;

  ${media.large`
    font-size: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .hide-small {
      display: none;
    }
    p.timer{
      align-self: center;
      font-size: 18px;
    }
  `}
  ${media.small`
      font-size: 12px;
  `}
`;

export default StyledBorderedContainer;
