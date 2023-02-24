import React, { useState } from 'react'

//add state to username, fullname, age
// have onchange function to each state where the state get change through e.target.value 
//onSubmit function where the data gets added into a list that is a state
//make the form with input and button tag 
//show the display 

const SubmitFormData = () => {
    const [username, setUsername] = useState(""); 
    const [fullname, setFullname] = useState(""); 
    const [age, setAge] = useState(""); 
    const [dataList, setDataList] = useState([])
   


const handleUsername = (e)=>{
setUsername(e.target.value); 
}; 

const handleFullName = (e)=>{
    setFullname(e.target.value);
};

const handleAge = (e)=>{
setAge(e.target.value); 
};

const handleSubmit = (e)=>{
e.preventDefault();
setDataList([
    ...dataList,
{
username:username, 
fullname: fullname, 
age:age
}])
setUsername(""); 
setFullname(""); 
setAge(""); 
}

  return (
 <>
 <h1>Challenge #5</h1>
 <p>Grab the values from the input fields and print below as per the sample output.</p>
<div>
    <form onSubmit={handleSubmit}>
        <div>
    <h3>Username:</h3>
<input value={username} onChange={handleUsername} />
<h3>FullName:</h3>
<input value={fullname} onChange={handleFullName}/>
<h3>Age:</h3>
<input value={age} onChange={handleAge}/>
</div>
<button type='submit'>Submit</button>
</form>
<h3>Request sent to DB with below request data</h3>
{dataList.map((data, index)=>(
    <ul key={index}>
    <li>Username: {data.username}</li>
    <li>FullName:{data.fullname}</li>
    <li>Age:{data.age}</li>
</ul>
))}

</div>
 </>
  )
}

export default SubmitFormData;