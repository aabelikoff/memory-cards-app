import { useState } from "react";
import useSounds from "./useSounds";
//Hook for analysing moves
export default function useAnalysis(nCards) {
  const [analysis, setAnalysis] = useState({
    nCardClicks: 0,
    nMoves: 0,
    totalPairs: nCards / 2,
    guessedPairs: 0,
    percentage: 0,
  });
  const { playGuessSound, playFailSound } = useSounds();

  const resetAnalysis = nCard => {
    setAnalysis({
      nCardClicks: 0,
      nMoves: 0,
      totalPairs: nCard / 2,
      guessedPairs: 0,
      percentage: 0,
    });
  };

  const analysCardClick = curPair => {
    if (!curPair.length) {
      return;
    }
    const newAnalysis = { ...analysis };
    newAnalysis.nCardClicks += 1;
    newAnalysis.nMoves = Math.floor(newAnalysis.nCardClicks / 2);
    if (curPair[0] === curPair[1]) {
      if (analysis.totalPairs - analysis.guessedPairs > 1) {
        playGuessSound();
      }
      newAnalysis.guessedPairs += 1;
      newAnalysis.percentage = parseFloat(((newAnalysis.guessedPairs * 100) / newAnalysis.totalPairs).toFixed(2));
    } else if (curPair.length === 2) {
      playFailSound();
    }
    setAnalysis(newAnalysis);
  };

  return [analysis, analysCardClick, resetAnalysis];
}
