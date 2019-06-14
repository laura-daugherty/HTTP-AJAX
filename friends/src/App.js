import React from 'react';
import './App.css';
import axios from 'axios';
import UpdateForm from './Components/UpdateForm'
import ListOfFriends from './Components/ListOfFriends'
import FriendForm from './Components/FriendForm'
import { Route, NavLink, } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      activeItem: []
    };
  }


  componentDidMount() {
    console.log('CDM now running');
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
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
        this.props.history.push('/')
      })
      .catch(err => {
        console.log(err)
      })
  }

  deleteFriend = (e, friend) => {

    e.preventDefault();
    console.log('I didnt like them anyways');
    console.log(friend.id)
    axios
      .delete(`http://localhost:5000/friends/${friend.id}`)
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

  setUpdateForm = (e, item) => {
    console.log("inside setting update form")
    e.preventDefault();
    this.setState({
      activeItem: item
    },
    () => {
      this.props.history.push('/update-form')
    })
  }

  updateFriend = item => {
    console.log("inside update friend")
    axios 
      .put(`http://localhost:5000/friends/${item.id}`, item)
      .then (res => {
        this.setState({
          friends: res.data
        });
        this.props.history.push('/')
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <nav>
          <NavLink exact to="/friend-form">
            Make a New Friend
          </NavLink>
          <NavLink exact to="/">
            Home
          </NavLink>
        </nav>
        <Route
          exact path="/"
          render={props => 
            <ListOfFriends 
              {...props} 
              addFriend={this.addFriend} 
              deleteFriend={this.deleteFriend}
              setUpdateForm={this.setUpdateForm} 
              friends={this.state.friends}
              /> 
            }
          />
        <Route
          path="/friend-form"
          render={props => 
            <FriendForm 
              {...props} 
              addFriend={this.addFriend} 
              friends={this.state.friends} 
              /> 
            }
          />
        <Route
          path="/update-form"
          render={props => 
            <UpdateForm 
              {...props} 
              activeItem={this.state.activeItem}
              updateFriend={this.updateFriend} 
            />
          }
        />
      </div>
 
    )
  }
}

export default App;
