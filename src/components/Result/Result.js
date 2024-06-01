import React from "react";
import StyledBorderedContainer from "../StyledComponents/StyledBorderedContainer";
import { useThemeContext } from "../../contexts/ThemeContext";

export default function Result({ nCardClicks, nMoves, totalPairs, guessedPairs, percentage }) {
  const { theme } = useThemeContext();
  return (
    <StyledBorderedContainer theme={theme} width={"40%"}>
      <p>
        Guessed:&nbsp;
        {guessedPairs} pairs of {totalPairs} <span className="hide-small">({percentage} %) </span>
      </p>
      <p>Moves: {nMoves}</p>
    </StyledBorderedContainer>
  );
}
