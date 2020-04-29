import React from "react";
import { login, register, group, member } from "./Questions";

class Questionaire extends React.Component {
  state = {};
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleClick = (e) => {
    const { info, close } = this.props;
    e.preventDefault();
    info(this.state);
    close();
  };
  questions = () => {
    const element = localStorage.getItem("element");
    switch (element) {
      case "Login":
        return login;
      case "Register":
        return register;
      case "Group":
        return group;
      case "Member":
        return member;
      default:
        return localStorage.setItem("element", "");
    }
  };
  render() {
    return (
      <div className="Questionaire">
        <form>
          {this.questions().map((element, i) => {
            return (
              <input
                key={i}
                name={element.name}
                type={element.type}
                placeholder={element.placeholder}
                onChange={this.handleChange}
              />
            );
          })}
          <button onClick={this.handleClick}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Questionaire;
