import React, { useEffect } from 'react'
import { useState } from 'react'; 

// two states - count and timer
// timer state will count down from 10
// count state will increment by 1





const MaxCount = () => {
    const [count, setCount] = useState(0);
    const [timer, setTimer] = useState(10);

const handleCount = () => {
    setCount(count+1); 
}

 
//when timer reaches 0, button should disappear

// how to switch the button state when timer reaches 0 ? 
// how to stop the timer when timer reaches 0 ?
// if statement if timer === 0, then button is not found 


useEffect(()=>{
const countDownTimer = setTimeout( ()=>{
    if (timer > 0 ){
        setTimer(timer - 1); 
    }
} , 1000)
return ()=>{
    clearTimeout(countDownTimer)
}
}, [timer])



  return (


    <>
    <h1>Challenge #6</h1>
    <p>Implement a button and timmer that will start from 10 and ends at 0 and tracks the counter untill the timer expires and button should disapper once timer expires</p>
    <div className='max-count'>
        <h1>{count}</h1>
        <h2>Time Left: {timer} seconds</h2>
        { timer === 0 ? null: <button onClick={handleCount}>+</button>}
    </div>

    </>
  )
}

export default MaxCount; 