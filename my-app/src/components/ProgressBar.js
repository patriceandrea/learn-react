import React, { useState } from 'react'

//have a progress or complete state 
//function where if the input is a certain number , the bar will increase the color 
//how do you make the color change into pink using css? you increase the witdth
//can change the styling of the width in inline 
// add a condition where 
const ProgressBar = () => {

  const [progress, setProgress] = useState(0);

  const setValuer = (e) => setProgress(Number(e.target.value));


  return (
    <>
      <h1>Challenge #4</h1>
      <p>Create a Progress Bar that should fill based on the input percentage value.</p>

      <div className="progress-bar">
        <h2>Progress bar</h2>
        <div className='container-bar'>
          {progress <= 100 && progress > 0 ? <div className='innerContainer-bar' style={{ width: `${progress}%` }}>
            {progress}%
          </div> : ""}
        </div>
        <form>
          <label for="html">Input Percentage:</label>
          <input type="number" onChange={setValuer} />
        </form>
      </div>

    </>
  )
}

export default ProgressBar;