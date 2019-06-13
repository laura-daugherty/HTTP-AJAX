import React from 'react';
import Friend from "./Friend"

class ListOfFriends extends React.Component {
  constructor(props) {
    super(props);
  }

    render() {
      return (
        <div>
          {this.props.friends.map(friend => (
            <div>
              <Friend key={friend.id} friend={friend} />
              <button
                onClick={e => {
                  this.props.deleteFriend(e, friend.id)
                }}>
                Betrayed!
              </button>
            </div>
          ))}
        </div>
      )
    }
  }

export default ListOfFriends