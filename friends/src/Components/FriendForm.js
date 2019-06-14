import React from 'react';

class FriendForm extends React.Component {
  state = {
    friend: {
      name: '',
      age: '',
      email: '',
    }
  };

  changeHandler = ev => {
    ev.persist();
    let value = ev.target.value;

    this.setState(prevState => ({
      friend: {
        ...prevState.friend,
        [ev.target.name]: value
      }
    }));
  };

  handleSubmit = e => {
    // if (this.props.activeItem) {
    //   this.props.updateItem(e, this.state.item);
    // } 

    this.props.addFriend(e, this.state.friend);
    
    this.setState({
      friend: {
        name: '',
        age: '',
        email: '',
      }
    });
  };

  render() {
    return (
      <div>
        {/* <h2>{`${this.props.activeItem ? 'Update' : 'Add New'} Item`}</h2> */}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={this.changeHandler}
            placeholder="name"
            value={this.state.friend.name}
          />
          <div className="baseline" />

          <input
            type="number"
            name="age"
            onChange={this.changeHandler}
            placeholder="age"
            value={this.state.friend.age}
          />
          <div className="baseline" />

          <input
            type="string"
            name="email"
            onChange={this.changeHandler}
            placeholder="email"
            value={this.state.friend.email}
          />
          <div className="baseline" />

          <button>
            Add New
          </button>

        </form>

      </div>
    );
  }
}

export default FriendForm;
