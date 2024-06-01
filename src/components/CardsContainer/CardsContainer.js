import React from "react";
import Card from "../Card/Card";
import StyledCardsContainer from "../StyledComponents/StyledCardsContainer";

export default function CardsContainer({ cards, fieldSize, onCardClick }) {
  const handleContainerClick = e => {
    const { cardUid: uid } = { ...e.target.dataset };
    onCardClick(uid);
  };
  return (
    <StyledCardsContainer className="CardsContainer" width={fieldSize.width} onClick={handleContainerClick}>
      {cards.length > 0 && cards.map((c, i) => <Card {...c} key={i} />)}
    </StyledCardsContainer>
  );
}
