import styled from "styled-components";
import media from "./media";

const StyledContainer = styled.div`
  color: ${props => (props.theme === "dark" ? "white" : "black")};
  background-color: ${props => (props.theme === "dark" ? "#23272f" : "$fff")};
  max-width: 800px;
  margin: auto;
  padding: 0 16px 16px;
  font-size: 1em;
  header {
    padding: 16px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: ${props => (props.theme === "dark" ? "3px solid yellow" : "3px solid #23272f")};
  }
  h1 {
    color: ${props => (props.theme === "dark" ? "yellow" : "#23272f")};
  }

  ${media.large`
    font-size: 0.7em;
    h1{
      padding: 4px;
      text-align: center;
    }
  `}

  ${media.medium`
    padding: 0 8px 8px;
    h1{
      font-size: 3em;
      span{
        display: none;
      }
    }
    
  `}

  ${media.small`
    header{
      padding: 8px;
    }
    h1{
      font-size: 2em;
    }
    
  `}
`;

export default StyledContainer;
