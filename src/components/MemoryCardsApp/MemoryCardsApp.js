import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
//hooks
import { useThemeContext } from "../../contexts/ThemeContext";
import useCardsInfo from "../../hooks/useCardsInfo"; //provides info about cards
import useAnalysis from "../../hooks/useAnalysis"; //analysing cards
import useRecord from "../../hooks/useRecord"; //saving player's records
import useSounds from "../../hooks/useSounds"; //game sounding
import useTimer from "../../hooks/useTimer"; //for displaying game time

//components
import ControlPanel from "../ControrPanel/ControlPanel";
import CardsContainer from "../CardsContainer/CardsContainer";
import Record from "../Record/Record";
import Result from "../Result/Result";
import StyledContainer from "../StyledComponents/StyledContainer";
import StyledAside from "../StyledComponents/StyledAside";
import StyledBorderedContainer from "../StyledComponents/StyledBorderedContainer";

function MemoryCardsApp() {
  const [fieldSize, setFieldSize] = useState({ width: 4, height: 2 }); //size of cards layer
  const [currentPair, setCurrentPair] = useState([]); //pair of clicked cards
  const [isGameStarted, setIsGameStarted] = useState(false);

  const [cards, setCards, changeCards] = useCardsInfo((fieldSize.width * fieldSize.height) / 2); //cards array
  const [analysis, analysCardClick, resetAnalysis] = useAnalysis(fieldSize.width * fieldSize.height); //analysis info
  const [, saveRecord, getRecord] = useRecord(); //record info
  const [time, timeInfo, startTimer, stopTimer, getTimerInfo, resetTimer] = useTimer(); //timer for game duration
  const recordInfo = useMemo(() => getRecord(fieldSize.width, fieldSize.height), [fieldSize, getRecord]); //keeps record for current size
  const { playHappyEndSound } = useSounds(); //function for playing sound at the end lf each

  const timerId = useRef(0); //timer for showing last pair after move

  const { theme } = useThemeContext();
  const containerClassName = `MemoryCardsApp ${theme}`;

  //card click handler
  const handleCardClick = useCallback(
    uid => {
      const card = cards.find(c => c.uid === uid); //find card by uid
      //if it's shown or game is not started
      if (!card || card.isShown || !isGameStarted) {
        return;
      }
      //changing a pair of cards for analising
      setCurrentPair(prevPair => (prevPair.length === 2 ? [card.id] : [...prevPair, card.id]));
      //changing clicked card to show it
      setCards(prevCards =>
        prevCards.map(c => {
          if (c.uid === uid) {
            return { ...c, isShown: true };
          }
          return c;
        })
      );
    },
    [cards, isGameStarted, setCards]
  );
  //changing field size
  const changeFildSize = (width, height) => {
    setFieldSize({ width, height });
    resetTimer();
    setIsGameStarted(false);
    resetAnalysis(width * height);
  };
  //start game logic
  const startGame = () => {
    const nCards = fieldSize.height * fieldSize.width;
    resetAnalysis(nCards);
    changeCards();
    startTimer();
    setIsGameStarted(prev => true);
  };
  //stop game logic
  const stopGame = () => {
    stopTimer();
    setIsGameStarted(prev => false);
    setCurrentPair([]);
  };

  //analysing current pair
  useEffect(() => {
    analysCardClick(currentPair);
    if (currentPair.length < 2) {
      return;
    }
    //if we have two cards shown leave them for a while (500ms)
    const [firstId, secondId] = currentPair;
    timerId.current = setTimeout(() => {
      //if they have same id leave thev shown
      if (firstId === secondId) {
        setCards(prevCards =>
          prevCards.map(pc => {
            if (pc.id === firstId) {
              return { ...pc, isShown: true, isGuessed: true };
            }
            return { ...pc };
          })
        );
      } else {
        //in other case leave them hidden
        setCards(prevCards =>
          prevCards.map(pc => {
            if (pc.id === firstId || pc.id === secondId) {
              return { ...pc, isShown: false };
            }
            return { ...pc };
          })
        );
      }
    }, 300);
    return () => clearTimeout(timerId.current);
  }, [currentPair]);

  useEffect(() => {
    //stop game and save record when we guessed all pairs
    if (analysis.guessedPairs === analysis.totalPairs) {
      playHappyEndSound();
      stopGame();
      saveRecord(fieldSize.width, fieldSize.height, analysis.nMoves, time);
    }
  }, [analysis]);

  return (
    <StyledContainer theme={theme} className={containerClassName}>
      <header>
        <h1>
          Memory<span className="hide-small"> Cards Game</span>
        </h1>
        <ControlPanel onChangeFieldSize={changeFildSize} onStartGame={startGame}></ControlPanel>
      </header>
      <StyledAside>
        <StyledBorderedContainer theme={theme} width={"25%"}>
          <p className="timer">
            <span className="hide-small">Game time: </span>
            {timeInfo}
          </p>
        </StyledBorderedContainer>
        <Result {...analysis} />
        <Record {...recordInfo} getTimeStr={getTimerInfo} />
      </StyledAside>
      <CardsContainer cards={cards} fieldSize={fieldSize} onCardClick={handleCardClick} />
    </StyledContainer>
  );
}

export default MemoryCardsApp;
