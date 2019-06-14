import React from 'react';


const Friend = props => {

  const {name, age, email} = props.friend;
    return (
      <div>
        <h2>{name}</h2>
        <div>
          age: {age}
        </div>
        <div>
          email: {email}
        </div>
        <button
          onClick={e => props.setUpdateForm(e, props.friend)}
          >
          Improve Your Friend
        </button>
      </div>
    )
  }
  
export default Friend

