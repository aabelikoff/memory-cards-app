import styled from "styled-components";
import media from "./media";

const StyledButton = styled.button`
  font-size: 18px;
  width: ${props => props.width || "auto"};
  height: ${props => props.height || "auto"};
  display: block;
  cursor: pointer;
  color: ${props => (props.theme === "dark" ? "white" : "black")};
  border: none;
  border-radius: ${props => `${props.radius}`};

  background: none;
  padding: 8px;
  transition: 250ms ease;
  &:hover {
    background-color: ${props => (props.theme === "dark" ? "rgb(200, 200, 200)" : "rgb(120, 120, 120)")};
    color: ${props => (props.theme === "dark" ? "black" : "white")};
  }

  ${media.large`
    font-size: 14px;
  `}

  ${media.small`
    font-size: 12px;
    padding:  2px 8px;
  `}
`;

export default StyledButton;
