import React from "./node_modules/react";
import { login, register, group, member, question } from "./Questions";

class Questionaire extends React.Component {
  state = {};
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };
  handleClick = (e) => {
    const { info, close } = this.props;
    e.preventDefault();
    if (Object.keys(this.state).length === 0) {
      let form = document.getElementsByTagName("form");
      if (form[0].children.length <= 3) {
        let message = document.createElement("p");
        message.textContent = "Please provide a Group Name";
        form[0].append(message);
      }
    } else {
      info(this.state);
      close();
    }
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
      case "Question":
        return question;
      default:
        return localStorage.setItem("element", "");
    }
  };
  render() {
    return (
      <div className="Questionaire">
        <form>
          <h2>{localStorage.getItem("element")}</h2>
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
