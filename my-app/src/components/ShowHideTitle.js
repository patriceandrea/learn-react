import React, { useState } from 'react'

const ShowHideTitle = () => {
  //if the you click on the button, the show state turn into true
  //once the show state is true, 

  const [show, setShow] = useState(false);

  const handleClick = () => {
    return setShow(!show);
  }

  return (
    <>
      <h1>Challenge #1</h1>
      <p>Implement a button to show/hide the text content:</p>
      <button onClick={handleClick}>Show/Hide</button>
      {show && <a>Welcome to React Challenges</a>}
    </>
  )
}

export default ShowHideTitle; 