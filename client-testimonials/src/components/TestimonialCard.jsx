import React from "react";

const TestimonialCard = ({ name, review }) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.name}>{name}</h3>
      <p style={styles.review}>"{review}"</p>
    </div>
  );
};

// Inline CSS styles
const styles = {
  card: {
    width: "350px",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f8f9fa",
    margin: "20px auto",
    borderLeft: "5px solid #007bff",
  },
  name: {
    color: "#007bff",
    fontWeight: "bold",
  },
  review: {
    fontStyle: "italic",
    color: "#555",
  },
};

export default TestimonialCard;
