import React from 'react';

class UpdateForm extends React.Component {
  state = {
    item: this.props.activeItem
  };

  changeHandler = ev => {
    ev.persist();
    let value = ev.target.value;

    this.setState(prevState => ({
      item: {
        ...prevState.item,
        [ev.target.name]: value
      }
    }));
  };

  // handleSubmit = e => {
  //   // if (this.props.activeItem) {
  //   //   this.props.updateItem(e, this.state.item);
  //   // } 

  //   this.props.addFriend(e, this.state.friend);
    
  //   this.setState({
  //     friend: {
  //       name: '',
  //       age: '',
  //       email: '',
  //     }
  //   });
  // };

  handleSubmit = e => {
    e.preventDefault();
    console.log("insidehandlesumbit")
    this.props.updateFriend(this.state.item)
  }

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
            value={this.state.item.name}
          />
          <div className="baseline" />

          <input
            type="number"
            name="age"
            onChange={this.changeHandler}
            placeholder="age"
            value={this.state.item.age}
          />
          <div className="baseline" />

          <input
            type="string"
            name="email"
            onChange={this.changeHandler}
            placeholder="email"
            value={this.state.item.email}
          />
          <div className="baseline" />

          <button
            onClick={this.handleSumbit}
            >
            Make Improvements
          </button>

        </form>

      </div>
    );
  }
}

export default UpdateForm;
