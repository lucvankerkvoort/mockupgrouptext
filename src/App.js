import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Modal from "./Components/Modal";
import Help from "./pages/Help";
import About from "./pages/About";
import CreateGroup from "./pages/CreateGroup";
import "./App.css";

class App extends React.Component {
  state = {
    showElement: false,
  };

  toggleElement = (boolean) => {
    this.setState({ showElement: boolean });
  };

  handleInfo = (input) => {
    console.log(input);
    this.setState({ input });
  };

  render() {
    console.log(this.state);
    const { showElement } = this.state;
    return (
      <div className="App">
        <Router>
          {showElement ? (
            <Modal close={this.toggleElement} info={this.handleInfo} />
          ) : null}
          <Navbar showElement={this.toggleElement} />
          <Route path="/creategroup" render={() => <CreateGroup />} />
          <Route path="/help" component={Help} />
          <Route path="/about" component={About} />
          <Route exact path="/" component={Homepage} />
        </Router>
      </div>
    );
  }
}

export default App;
