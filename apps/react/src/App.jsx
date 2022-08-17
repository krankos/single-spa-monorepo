import React from "react";
import Counter from "./Counter";
import ParcelPage from "./ParcelPage";
import "./App.css";
export default function App() {
  return (
    <div className="App">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt=""
        width={"200px"}
      />
      <h1>React App</h1>
      <Counter></Counter>

      <div className="parcel">
        <ParcelPage></ParcelPage>
      </div>
    </div>
  );
}
