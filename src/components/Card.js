import React, { useEffect } from 'react';
import '../styles/card.css';

function Card(props) {
  useEffect(() => {
    const onCardClick = (e) => {
      props.shuffleCards();
      props.selectCard(props.id);
      console.log(props.id);
    };

    const card = document.getElementById(`${props.id}`);
    card.addEventListener('click', onCardClick);
    return () => {
      card.removeEventListener('click', onCardClick);
    };
  });

  return (
    <div className="card" id={props.id}>
      <img src={props.url} alt={props.name} />
      <p>{props.name}</p>
    </div>
  );
}

export default Card;
