import React from 'react';
import './App.css';
import axios from 'axios';
import ListOfFriends from './Components/ListOfFriends'
import NewFriendForm from './Components/NewFriendForm'
import { Route } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
    };
  }


  componentDidMount() {
    console.log('CDM now running');
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        console.log(res.data);
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: err });
      });
  }
  addFriend = (e, friend) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/friends', friend)
      .then (res => {
        this.setState({
          friends: res.data
        });
      })
        .catch(err => {
          console.log(err)
        })

  }

  deleteFriend = (e, friend) => {
    e.preventDefault();
    console.log('I didnt like them anyways');
    axios
      .delete(`http://localhost:5000/friends/${friend}`)
      .then(res => {
        console.log(res.data);
        this.setState({
          friends: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };


  render() {
    return (
      <div>
      <Route
        exact path="/"
        render={props => <ListOfFriends {...props} addFriend={this.addFriend} deleteFriend={this.deleteFriend} friends={this.state.friends}/> }
        />
        <NewFriendForm deleteFriend={this.deleteFriend} addFriend={this.addFriend} friends={this.state.friends} />
      </div>
 
    )
  }
}

export default App;
