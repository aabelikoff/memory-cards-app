import React from "react";
import StyledCard from "../StyledComponents/StyledCard";
import { useThemeContext } from "../../contexts/ThemeContext";

export default function Card({ image, id, isShown, uid }) {
  const { theme } = useThemeContext();
  return (
    <StyledCard theme={theme} data-card-id={id} data-card-uid={uid}>
      {isShown && <img src={image} alt="minion" />}
    </StyledCard>
  );
}
