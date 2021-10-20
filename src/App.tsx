import React from "react";
import "./App.css";
import Button from "./atoms/Button";
import InputForm from "./molecules/inputForm";

function App() {
  return (
    <div className="App">
      <Button type="button">Log in</Button>
      <InputForm required type="email" placeholder="Input user name" />
    </div>
  );
}

export default App;
