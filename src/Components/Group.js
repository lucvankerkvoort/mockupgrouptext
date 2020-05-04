import React from "react";
import { member } from "./Questions";
class Group extends React.Component {
  state = {};
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleClick = (e) => {
    e.preventDefault();
    const members = document.getElementById("members");
    let name = document.createElement("p");
    name.textContent = this.state.memberName;
    let tel = document.createElement("p");
    tel.textContent = this.state.telephoneNumber;
    members.appendChild(name, tel);
  };
  render() {
    const { groupName } = this.props;
    return (
      <div className="groupElement" id={groupName}>
        <h2>{groupName}</h2>
        <div className="members" />
        {member.map((element, i) => {
          return (
            <form key={i}>
              <input
                key={i}
                name={element.name}
                type={element.type}
                placeholder={element.placeholder}
                onChange={this.handleChange}
              />
            </form>
          );
        })}

        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}

export default Group;
