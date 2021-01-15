import React, { Component } from "react";
import "./ContactForm.css";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubnit = (e) => {
    e.preventDefault();

    this.props.onAddTask({ ...this.state });

    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <form className="ContactForm" onSubmit={this.handleSubnit}>
        <label className="ContactForm-label">
          Name
          <input
            className="ContactForm-input"
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label className="ContactForm-label">
          Number
          <input
            className="ContactForm-input"
            name="number"
            type="phone"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <button className="ContactForm-button" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
