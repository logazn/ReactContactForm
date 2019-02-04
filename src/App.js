import React, { Component } from "react";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contact name="John Doe" email="Jdoe@gmail.com" phone="3239432" />
          <Contact name="Karen Smith" email="kSmith@gmail.com" phone="234324" />
        </div>
      </div>
    );
  }
}

export default App;
