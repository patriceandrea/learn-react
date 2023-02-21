import React, { useEffect, useState } from 'react'


const StopwatchTimer = () => {

  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0);

  //window can be accesed globally in brower env.
  //window object is defined and can be set globally

  const startTimer = () => {
    //when button is clicked, you increment by 1 continously 
    //it stops when the stoptimer is clicked 
    // do a for loop for it to not stop 
    window.timer = setInterval(() => {
      setSeconds(prevseconds => prevseconds + 1);
    }, 1000);
  };



  const stopTimer = () => {
    //when the button is clicked, the time becomes static 
    clearInterval(window.timer)
  };
  const resetTimer = () => {
    //when reset button is clicked, the time is cleared 

    clearInterval(window.timer)
    setSeconds(0)
  };




  return (
    <>
      <h1>Challenge #2</h1>
      <p>Implement a Stopwatch/timmer as shown below with start, stop and reset button:</p>

      <div className="container">
        <h1>Timer</h1>
        <span> {Math.trunc(seconds / 60)} mins </span>
        <span> {seconds % 60} secs</span>
        <div>
          <button onClick={startTimer}>Start</button>
          <button onClick={stopTimer}>Stop</button>
          <button onClick={resetTimer}>Reset</button>
        </div>
      </div>
    </>
  )
}

export default StopwatchTimer;