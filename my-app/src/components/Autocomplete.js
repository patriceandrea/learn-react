import React, { useState, useRef } from "react";

//Have an input to search the query
// function handle change in search input field and updates search query state
// A component displays the search results based on search query

const Autocomplete = () => {
  const data = [
    "Victoria",
    "Montreal",
    "Toronto",
    "Vancouver",
    "Calgary",
    "Ottawa",
  ];

  const [query, setQuery] = useState("");
  const [list, setList] = useState(data);
  const selectRef = useRef(null);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    const fileredResults = data.filter((item) => {
      return item.toLowerCase().includes(query.toLocaleLowerCase());
    });
    setList(fileredResults);
   
  };


  const handleSelectClick = (e) => {
    const value = e.target.getAttribute('data-value');
    setQuery(value);
  };
  const handleFormSubmit = event => {
    event.preventDefault();
    // Do something with the selected value
    console.log(`Selected value: ${query}`);
  };

  return (
    <>
      O<h1>Challenge #7</h1>
      <p>
        Implement an Autocomplete feature where when a user types in a few
        letters, it gives suggestions
      </p>
      <div>
        <form onSubmit={handleFormSubmit}>
        <input value={query} onChange={handleInputChange} />
        <div>
          {query.length > 1 && (
            <select ref={selectRef}>
              {list.map((result, index) => (
                <option key={index} value={result} onClick={handleSelectClick}>{result}</option>
              ))}
            </select>
          )}
          </div> 
           <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Autocomplete;
