import React from "react";
import { member } from "./Questions";
class Group extends React.Component {
  state = {};
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleClick = (e) => {
    e.preventDefault();
    const members =
      e.target.previousElementSibling.previousElementSibling
        .previousElementSibling;
    let tableRow = document.createElement("tr");
    let name = document.createElement("td");
    name.textContent = this.state.memberName;
    let tel = document.createElement("td");
    tel.textContent = this.state.telephoneNumber;
    tableRow.appendChild(name);
    tableRow.appendChild(tel);
    members.append(tableRow);
  };
  render() {
    const { groupName } = this.props;
    return (
      <div className="groupElement" id={groupName}>
        <h2>{groupName}</h2>
        <table className="members">
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
          </tr>
        </table>
        {member.map((element, i) => {
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
      </div>
    );
  }
}

export default Group;
