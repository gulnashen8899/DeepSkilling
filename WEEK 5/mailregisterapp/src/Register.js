import React, { Component } from "react";

class Register extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      password: "",
      errors: {}
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  validateForm = () => {
    const errors = {};

    if (this.state.name.length < 5) {
      errors.name = "Name should contain at least 5 characters";
    }

    if (
      !this.state.email.includes("@") ||
      !this.state.email.includes(".")
    ) {
      errors.email = "Enter a valid email";
    }

    if (this.state.password.length < 8) {
      errors.password = "Password should contain at least 8 characters";
    }

    this.setState({ errors });

    return Object.keys(errors).length === 0;
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.validateForm()) {
      alert("Registration Successful!");

      this.setState({
        name: "",
        email: "",
        password: "",
        errors: {}
      });
    }
  };

  render() {
    const { name, email, password, errors } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <table
          style={{
            margin: "auto",
            borderSpacing: "10px"
          }}
        >
          <tbody>
            <tr>
              <td>Name:</td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                />
              </td>
            </tr>

            <tr>
              <td></td>
              <td style={{ color: "red" }}>
                {errors.name}
              </td>
            </tr>

            <tr>
              <td>Email:</td>
              <td>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
              </td>
            </tr>

            <tr>
              <td></td>
              <td style={{ color: "red" }}>
                {errors.email}
              </td>
            </tr>

            <tr>
              <td>Password:</td>
              <td>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />
              </td>
            </tr>

            <tr>
              <td></td>
              <td style={{ color: "red" }}>
                {errors.password}
              </td>
            </tr>

            <tr>
              <td colSpan="2">
                <button type="submit">
                  Register
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    );
  }
}

export default Register;