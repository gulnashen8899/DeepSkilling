import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      isLoggedIn: false,
    };
  }

  login = () => {
    this.setState({ isLoggedIn: true });
  };

  logout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    let page;

    if (this.state.isLoggedIn) {
      page = <UserPage />;
    } else {
      page = <GuestPage />;
    }

    return (
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h1>Ticket Booking App</h1>

        {page}

        <br />

        {this.state.isLoggedIn ? (
          <button onClick={this.logout}>Logout</button>
        ) : (
          <button onClick={this.login}>Login</button>
        )}
      </div>
    );
  }
}

function GuestPage() {
  return (
    <div>
      <h2>Guest User</h2>

      <h3>Flight Details</h3>

      <table
        border="1"
        style={{
          margin: "auto",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th>Flight</th>
            <th>From</th>
            <th>To</th>
            <th>Time</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AI101</td>
            <td>Kolkata</td>
            <td>Delhi</td>
            <td>10:00 AM</td>
          </tr>

          <tr>
            <td>AI202</td>
            <td>Mumbai</td>
            <td>Bangalore</td>
            <td>2:30 PM</td>
          </tr>

          <tr>
            <td>AI303</td>
            <td>Chennai</td>
            <td>Hyderabad</td>
            <td>6:00 PM</td>
          </tr>
        </tbody>
      </table>

      <p>Please login to book tickets.</p>
    </div>
  );
}

function UserPage() {
  return (
    <div>
      <h2>Welcome User</h2>

      <h3>You can now book your tickets.</h3>

      <button>Book Ticket</button>
    </div>
  );
}

export default App;
