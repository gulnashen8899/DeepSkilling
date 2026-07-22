import React, { Component } from "react";

class ComplaintRegister extends Component {
  constructor() {
    super();

    this.state = {
      employeeName: "",
      complaint: "",
    };
  }

  handleNameChange = (event) => {
    this.setState({
      employeeName: event.target.value,
    });
  };

  handleComplaintChange = (event) => {
    this.setState({
      complaint: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    alert(
      `Complaint Raised Successfully!\n\nEmployee Name: ${this.state.employeeName}\nComplaint: ${this.state.complaint}`
    );

    this.setState({
      employeeName: "",
      complaint: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <table
          style={{
            margin: "auto",
            borderSpacing: "10px",
          }}
        >
          <tbody>
            <tr>
              <td>Employee Name:</td>
              <td>
                <input
                  type="text"
                  value={this.state.employeeName}
                  onChange={this.handleNameChange}
                  required
                />
              </td>
            </tr>

            <tr>
              <td>Complaint:</td>
              <td>
                <textarea
                  rows="5"
                  cols="30"
                  value={this.state.complaint}
                  onChange={this.handleComplaintChange}
                  required
                ></textarea>
              </td>
            </tr>

            <tr>
              <td colSpan="2">
                <button type="submit">
                  Submit Complaint
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    );
  }
}

export default ComplaintRegister;