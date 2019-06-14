import React from 'react';
import Friend from "./Friend"

class ListOfFriends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    }
  }

  render() {
    return (
      <>
        {this.props.friends.map(friend => (
          <div
            key={friend.id}
          >
            <Friend 
              friend={friend}
              setUpdateForm={this.props.setUpdateForm}
            />
            <button
              onClick={e => {
                this.props.deleteFriend(e, friend)
              }}>
              Betrayed!
            </button>
          </div>
        ))}
      </>
    )
  }
}

export default ListOfFriends