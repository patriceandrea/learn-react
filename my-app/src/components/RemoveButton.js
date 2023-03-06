import React, {useState} from 'react'

const RemoveButton = () => {
    const [children, setChildren] = useState([3, 1, 2]);

    function removeChild(removedId) {
        setChildren(children.filter((id=> id !== removedId)));

      }

  return (
 <>
 <h1>Challenge #9</h1>
 <p>Can't remove the buttons when clicked , See if you can debug and fix</p>


 <div>
 {children.map((id) => (
      <button key={id} onClick={()=>removeChild(id)} style={{display:'flex'}}>I'm the child {id}. Click to remove me!</button>
    ))}
  </div>
 </>
  )
}

export default RemoveButton;