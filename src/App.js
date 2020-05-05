import React from "react";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import Modal from "./components/modal";
import Help from "./pages/help";
import About from "./pages/about";
import CreateGroup from "./pages/createGroup";
import "./App.css";

class App extends React.Component {
  state = {
    showElement: false,
  };

  toggleElement = (boolean) => {
    this.setState({ showElement: boolean });
  };

  handleInfo = (input) => {
    this.setState({ input });
    console.log("something");
  };

  render() {
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
