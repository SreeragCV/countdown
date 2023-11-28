import React, { useRef, useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const [timeExpired, setTimeExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  const timer = useRef();

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimeExpired(true);
    }, targetTime * 1000);
    setTimerStarted(true);
  }

  function handleStop(){
    clearTimeout(timer.current)
    // setTimeExpired(true)
    // setTimerStarted(false)
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timeExpired && <p>You Lost</p>}
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
  );
}
