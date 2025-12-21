import React from "react";
import ReactDOM from "react-dom/client";

// 1. Title Component
function Title() {
  return <h1>Welcome to ReactJS</h1>;
}

// 2. Header Component
const Header = () => {
  return (
    <div style={{ backgroundColor: "lightblue", padding: "10px" }}>
      <h2>This is the Header</h2>
    </div>
  );
};

// 3. About Component
const About = () => {
  return (
    <div style={{ backgroundColor: "lightgreen", padding: "10px" }}>
      <h2>About React</h2>
      <p>React is a JavaScript library for building UI.</p>
    </div>
  );
};

// 4. Course Component
const Course = () => {
  return (
    <div style={{ backgroundColor: "lightyellow", padding: "10px" }}>
      <h2>Course Details</h2>
      <p>This course covers basics to advanced React concepts.</p>
    </div>
  );
};

// 5. Footer Component
const Footer = () => {
  return (
    <div style={{ backgroundColor: "lightgray", padding: "10px" }}>
      <h3>Thank you for learning React!</h3>
    </div>
  );
};

// Main Component to render all
const App = () => {
  return (
    <div>
      <Title />
      <Header />
      <About />
      <Course />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
