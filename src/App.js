import React, { Component } from "react";
import Contact from "./Components/Contact";
import Header from "./Components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />

        <Contact name="John Doe" email="Jdoe@gmail.com" phone="3239432" />
        <Contact name="Karen Smith" email="kSmith@gmail.com" phone="234324" />
      </div>
    );
  }
}

export default App;
