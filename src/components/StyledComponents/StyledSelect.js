import styled from "styled-components";
import media from "./media";

const StyledSelect = styled.select`
  border: none;
  outline: none;
  padding: 8px;
  font-size: 18px;
  border-radius: 8px;
  background-color: ${props => (props.theme === "dark" ? "rgb(200, 200, 200)" : "rgb(180, 180, 180)")};
  color: "#23272f";
  font-weight: 600;
  text-align: center;

  ${media.large`
    font-size: 14px;
  `}

  ${media.small`
    padding: 8px 4px;
    font-size: 12px;
  `}
`;

export default StyledSelect;
