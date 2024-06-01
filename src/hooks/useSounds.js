import { importFailSounds, importGuessSounds, importHappyEndSounds } from "../utills/soundsImporter";
import { useState, useEffect, useCallback } from "react";

export default function useSounds() {
  const [failSounds, setFailSounds] = useState([]);
  const [guessSounds, setGuessSounds] = useState([]);
  const [happyEndSounds, setHappyEndSounds] = useState([]);

  useEffect(() => {
    const loadSounds = importFunc => {
      return importFunc().map(src => new Audio(src));
    };
    setFailSounds(loadSounds(importFailSounds));
    setGuessSounds(loadSounds(importGuessSounds));
    setHappyEndSounds(loadSounds(importHappyEndSounds));
  }, []);

  const playRandomSound = useCallback(soundsArray => {
    if (soundsArray.length > 0) {
      const index = Math.floor(Math.random() * soundsArray.length);
      soundsArray[index].play();
    }
  }, []);

  const playFailSound = useCallback(() => playRandomSound(failSounds), [failSounds, playRandomSound]);
  const playGuessSound = useCallback(() => playRandomSound(guessSounds), [guessSounds, playRandomSound]);
  const playHappyEndSound = useCallback(() => playRandomSound(happyEndSounds), [happyEndSounds, playRandomSound]);

  return {
    playFailSound,
    playGuessSound,
    playHappyEndSound,
  };
}
