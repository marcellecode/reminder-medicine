import React from "react";
import ReactDOM from "react-dom";
import RegisterMedicine from "./components/RegisterMedicine";

class App extends React.Component {
  render() {
    return <RegisterMedicine />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
