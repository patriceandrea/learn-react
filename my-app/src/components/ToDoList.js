import React, { useState } from 'react'

const ToDoList = () => {
  //have a state for the e.target.value, so when inputing the city value 
  //have a state for the list of cities in order to view the list 
  //when you click on the add button, the city state gets added to the cityList
  //is handle submit necessary? yes it is !, you put the cities state into the list 

  const [cities, setCities] = useState("")
  const [cityList, setCityList] = useState([])


  const addCities = (e) => {
    //Complete function
    setCities(e.target.value);

  };

  const handleSubmit = (e) => {
    e.preventDefault()
    //add a spread of citylist + the new city 
    setCityList([...cityList, cities])
    setCities("")
  }

  const handleDeleteCity = (index) => {
    const filteredList = cityList.filter((_, item) => index !== item);
    setCityList(filteredList)
  }

  return (
    <>
      <h1>Challenge #3</h1>
      <p>Create a "todo" app with the following criteria. The user should able to add and remove todo items. Starter code is provided</p>
      <div>
        <form onSubmit={handleSubmit}>
          <input value={cities} type="text" onChange={addCities} />
          <button type='submit' >Add</button>
        </form>

      </div>
      <ul>
        {cityList.map((city, index) => (
          <li key={index}>{city}<button onClick={() => handleDeleteCity(index)}>X</button></li>
        ))}
      </ul>
    </>
  )
}

export default ToDoList;