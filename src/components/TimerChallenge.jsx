import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const [timeExpired, setTimeExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  const timer = useRef();
  const dialog = useRef();

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimeExpired(true);
      dialog.current.open();
    }, targetTime * 1000);
    setTimerStarted(true);
  }

  function handleStop(){
    clearTimeout(timer.current)
    // setTimeExpired(true)
    // setTimerStarted(false)
  }

  return (
    <> 
    <ResultModal targetTime={targetTime} ref={dialog} result='lost'/>
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerStarted ? handleStop : handleStart}>{timerStarted ? 'Stop' : 'Start'} Challenge</button>
      </p>
      <p className={timerStarted ? 'active' : undefined}>
        {timerStarted ? "Time Is Running" : "Time Inactive"}
      </p>
    </section>
    </>
  );
}
