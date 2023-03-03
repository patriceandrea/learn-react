import React, { useState } from "react";

//have a state for the value in the textfield
//have an handleChange function where only letters alllowed. 
// How to allow only letters? use regex? use the String.replace ,ethod to remove non letters 
//once input a number, the textfield is gonna be blank

const InvalidateNumbers = () => {

const [value, setValue] = useState('')

const handleChange = (e)=>{
  const regex = /[^a-z]/gi;
  
  //non letter characters gets replaced to an empty string
  const result = e.target.value.replace(regex, '')

  setValue(result)
}

  return (
    <>
      <h1>Challenge #8</h1>
      <p>Implement a field where you can only input letters. No numbers allowed! </p>
      <h3>Letters Only!</h3>
      <input onChange={handleChange} value={value}/>
    </>
  );
};

export default InvalidateNumbers;
