import React from "react";
import ReactDOM from "react-dom/client";

// // 1. Title Component
// function Title() {
//   return <h1>Welcome to ReactJS</h1>;
// }

// // 2. Header Component
// const Header = () => {
//   return (
//     <div style={{ backgroundColor: "lightblue", padding: "10px" }}>
//       <h2>This is the Header</h2>
//     </div>
//   );
// };

// // 3. About Component
// const About = () => {
//   return (
//     <div style={{ backgroundColor: "lightgreen", padding: "10px" }}>
//       <h2>About React</h2>
//       <p>React is a JavaScript library for building UI.</p>
//     </div>
//   );
// };

// // 4. Course Component
// const Course = () => {
//   return (
//     <div style={{ backgroundColor: "lightyellow", padding: "10px" }}>
//       <h2>Course Details</h2>
//       <p>This course covers basics to advanced React concepts.</p>
//     </div>
//   );
// };

// // 5. Footer Component
// const Footer = () => {
//   return (
//     <div style={{ backgroundColor: "lightgray", padding: "10px" }}>
//       <h3>Thank you for learning React!</h3>
//     </div>
//   );
// };

// // Main Component to render all
// const App = () => {
//   return (
//     <div>
//       <Title />
//       <Header />
//       <About />
//       <Course />
//       <Footer />
//     </div>
//   );
// };


let Header = () => {
  return (
    <header className="header">
      {/* LOGO */}
      <div className="logo">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="LearnSphere Logo"
        />
        <span className="brand-name">LearnSphere</span>
      </div>

      {/* NAV */}
      <nav className="nav">
        <ul>
          <li>Courses</li>
          <li>Programs</li>
          <li>About</li>
          <li className="login-btn">Login</li>
        </ul>
      </nav>
    </header>
  );
};

/* ---------- BODY ---------- */
let Body = () => {
  return (
    <div className="body">
      <h1>Online Courses</h1>
      <h3>Upgrade your skills with expert-led learning programs</h3>
      <h5>Popular courses to explore</h5>

      <div className="course-items">
        <Card
          imgSrc="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg"
          name="Full Stack Development"
          category="Web Development"
          platform="LearnHub"
          ratings="4.6 ⭐ · 6 Months"
        />

        <Card
          imgSrc="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
          name="Data Science Bootcamp"
          category="AI & ML"
          platform="SkillForge"
          ratings="4.5 ⭐ · 5 Months"
        />

        <Card
          imgSrc="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
          name="UI/UX Design"
          category="Design"
          platform="DesignPro"
          ratings="4.4 ⭐ · 3 Months"
        />

        <Card
          imgSrc="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg"
          name="Cloud Computing"
          category="AWS & Azure"
          platform="CloudPath"
          ratings="4.3 ⭐ · 4 Months"
        />

        <Card
          imgSrc="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg"
          name="Java Backend Mastery"
          category="Backend Development"
          platform="CodeVerse"
          ratings="4.7 ⭐ · 5 Months"
        />

        <Card
          imgSrc="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
          name="Cyber Security"
          category="Security"
          platform="SecureIT"
          ratings="4.2 ⭐ · 4 Months"
        />
      </div>
    </div>
  );
};

/* ---------- CARD ---------- */
let Card = (props) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={props.imgSrc} alt="course" />
      </div>
      <div className="card-details">
        <h2>{props.name}</h2>
        <h4>{props.ratings}</h4>
        <p>{props.category}</p>
        <p>{props.platform}</p>
      </div>
    </div>
  );
};

/* ---------- FOOTER ---------- */
let Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>LearnSphere</h2>
        <p>Empowering learners with quality online education.</p>
      </div>

      <div className="footer-links">
        <div>
          <h4>Platform</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Instructors</li>
          </ul>
        </div>

        <div>
          <h4>Support</h4>
          <ul>
            <li>Help Center</li>
            <li>Contact</li>
            <li>Community</li>
          </ul>
        </div>

        <div>
          <h4>Policy</h4>
          <ul>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Refund</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 LearnSphere. All rights reserved.</p>
      </div>
    </footer>
  );
};

/* ---------- APP ---------- */
let AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

  