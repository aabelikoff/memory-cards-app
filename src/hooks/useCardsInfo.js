import { useState, useEffect, useCallback } from "react";
import cardsInfo from "../db/minionCards";
import { v4 as uuid } from "uuid";
//function to shuffle array elements
const shuffleArray = array => {
  let copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};
//Hook for manipulating and storing information about cards
export default function useCardsInfo(count) {
  const [cards, setCards] = useState([]);

  //change cards function
  const changeCards = useCallback(() => {
    let partArray = shuffleArray(cardsInfo)
      .slice(0, count)
      .map(card => {
        return { ...card, isShown: false, isGuessed: false, uid: uuid() };
      });
    //befor changing cards we double them and shuffle
    setCards(
      shuffleArray([
        ...partArray,
        ...partArray.map(card => {
          return { ...card, uid: uuid() };
        }),
      ])
    );
  }, [count]);

  useEffect(() => {
    changeCards();
  }, [count, changeCards]);

  return [cards, setCards, changeCards];
}
