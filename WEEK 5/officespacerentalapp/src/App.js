import React from "react";

function App() {
  // Office Object
  const office = {
    name: "Tech Park",
    rent: 55000,
    address: "Salt Lake, Kolkata",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800",
  };

  // List of Office Objects
  const officeList = [
    {
      name: "Tech Park",
      rent: 55000,
      address: "Salt Lake, Kolkata",
    },
    {
      name: "Cyber Hub",
      rent: 75000,
      address: "Sector V, Kolkata",
    },
    {
      name: "Business Tower",
      rent: 45000,
      address: "New Town, Kolkata",
    },
  ];

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      {/* Heading */}
      <h1>Office Space Rental App</h1>

      {/* Image */}
      <img
        src={office.image}
        alt="Office Space"
        width="500"
        height="300"
      />

      {/* Office Details */}
      <h2>{office.name}</h2>

      <h3
        style={{
          color: office.rent <= 60000 ? "red" : "green",
        }}
      >
        Rent: ₹{office.rent}
      </h3>

      <h3>Address: {office.address}</h3>

      <hr />

      <h2>Available Office Spaces</h2>

      {officeList.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid black",
            margin: "15px",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <h3>{item.name}</h3>

          <p
            style={{
              color: item.rent <= 60000 ? "red" : "green",
              fontWeight: "bold",
            }}
          >
            Rent: ₹{item.rent}
          </p>

          <p>Address: {item.address}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
