import { useRef, useEffect, useState, useCallback } from "react";

export default function useTimer() {
  const [timerInfo, setTimerInfo] = useState("00:00");
  const [isTimerWorks, setIsTimerWorks] = useState(false);
  const [timeDiff, setTimeDiff] = useState(0);
  const timerId = useRef(0);

  const getTwoDigits = num => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  const getTimerInfo = useCallback(timeDiff => {
    const hours = Math.floor(timeDiff / 1000 / 60 / 60);
    const mins = Math.floor((timeDiff / 1000 / 60) % 60);
    const secs = Math.floor((timeDiff / 1000) % 60);
    return `${hours ? getTwoDigits(hours) + ":" : ""}${getTwoDigits(mins)}:${getTwoDigits(secs)}`;
  }, []);

  useEffect(() => {
    if (isTimerWorks) {
      const startTime = new Date();
      timerId.current = setInterval(() => {
        const currentTime = new Date();
        const timeDiff = currentTime - startTime;
        setTimeDiff(timeDiff);
        setTimerInfo(getTimerInfo(timeDiff));
      }, 1000);
    } else {
      clearInterval(timerId.current);
    }

    return () => {
      clearInterval(timerId.current);
    };
  }, [isTimerWorks, getTimerInfo]);

  const startTimer = () => {
    setTimerInfo("00:00");
    setIsTimerWorks(true);
  };
  const stopTimer = () => {
    setIsTimerWorks(false);
  };
  const resetTimer = () => {
    setTimerInfo("00:00");
    setTimeDiff(0);
    setIsTimerWorks(false);
  };

  return [timeDiff, timerInfo, startTimer, stopTimer, getTimerInfo, resetTimer];
}
