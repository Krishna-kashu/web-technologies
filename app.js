import React from "react";
import ReactDOM from "react-dom/client";

console.log("Hello World!");

function Title() {
  return <h1>Welcome to ReactJS</h1>;
}

const Heading = () => {
  return (
    <div>
      <Title />
      <div
        className="secondDiv"
        style={{ backgroundColor: "red", padding: "10px" }}
      >
        <div id="innerDiv">
          <h1>hello react !!!</h1>
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
