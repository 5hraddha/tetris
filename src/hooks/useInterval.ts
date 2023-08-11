import { useEffect, useRef } from "react";

// Custom hook by Dan Abramov
export const useInterval = (callback: () => void, delay: number) => {
  const savedCallback = useRef(callback);

  // Remember the latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval
  // eslint-disable-next-line
  useEffect(() => {
    function tick() {
      savedCallback.current();
      // Put focus back to Game Controller input again after losing it
      const gameControllerInput = document.querySelector(
        ".gameController"
      ) as HTMLElement;
      gameControllerInput!.focus();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => {
        clearInterval(id);
      };
    }
  }, [delay]);
};
