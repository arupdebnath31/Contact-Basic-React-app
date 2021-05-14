import React, { Component } from "react";

class AddContact extends Component {
state = {
  name: "",
  email: "",
}
  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All the fields are required...!!");
      return;
    }
    this.props.addContactHandler(this.state);
    // console.log(this.state);
    this.setState({name: "" ,email: ""}); // clearing the state here....
  };
  render() {
    return (
      <div className="ui main">
        <h1>Add Contact</h1>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button  className="ui button blue">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddContact;
