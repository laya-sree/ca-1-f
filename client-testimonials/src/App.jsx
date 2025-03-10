import React from "react";
import TestimonialCard from "./components/TestimonialCard";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#007bff" }}>Customer Testimonials</h1>
      <TestimonialCard 
        name="Emily Watson" 
        review="This service was amazing! Highly recommended." 
      />
      <TestimonialCard 
        name="Michael Johnson" 
        review="Fantastic experience! The team was professional and efficient." 
      />
    </div>
  );
}

export default App;

