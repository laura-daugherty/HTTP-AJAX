import React from 'react';


const Friend = props => {

  const {name, age, email, id} = props.friend;

    return (
      <div>
        <h2>{name}</h2>
        <div>
          age: {age}
        </div>
        <div>
          email: {email}
        </div>
      </div>
    )
  }
  
export default Friend

