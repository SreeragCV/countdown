import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000)

  const timer = useRef();
  const dialog = useRef();

  const timerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if(timeRemaining <= 0){
    clearInterval(timer.current)
    setTimeRemaining(targetTime * 1000)
    dialog.current.open()
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10)
    }, 10);
  }

  function handleStop(){
    dialog.current.open()
    clearInterval(timer.current)
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
        <button onClick={timerActive ? handleStop : handleStart}>{timerActive ? 'Stop' : 'Start'} Challenge</button>
      </p>
      <p className={timerActive ? 'active' : undefined}>
        {timerActive ? "Time Is Running" : "Time Inactive"}
      </p>
    </section>
    </>
  );
}
