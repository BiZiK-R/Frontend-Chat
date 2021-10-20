import React from "react";
import "./App.scss";
import Button from "./atoms/Button";
import InputForm from "./molecules/inputForm";
import FormLogin from "./organisms/formLogin";

function App() {
  return (
    <div className="App">
      <FormLogin></FormLogin>
    </div>
  );
}

export default App;
