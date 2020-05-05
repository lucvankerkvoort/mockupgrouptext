import React from "./node_modules/react";
import Modal from "./modal";
class Group extends React.Component {
  state = {
    showElement: false,
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleInfo = (info) => {
    const { groupName } = this.props;
    if (info["question"]) {
      let question = info.question;
      let header = document.createElement("h2");
      header.textContent = "Question";
      let div = document.getElementById(`question-${groupName}`);
      div.append(header, question);
    } else {
      const { groupName } = this.props;
      const tableHeader = document.getElementsByClassName(
        `thead-${groupName}`
      )[0];
      if (tableHeader.childNodes.length < 1) {
        let tableRow = document.createElement("tr");
        let name = document.createElement("th");
        name.textContent = "Name";
        let phone = document.createElement("th");
        phone.textContent = "Tel";
        tableRow.append(name);
        tableRow.append(phone);
        tableHeader.appendChild(tableRow);
      }
      const members = document.getElementsByClassName(`tbody-${groupName}`)[0];
      let tableRow = document.createElement("tr");
      let name = document.createElement("td");
      name.textContent = info.memberName;
      let tel = document.createElement("td");
      tel.textContent = info.telephoneNumber;
      let deleteMember = document.createElement("td");
      deleteMember.textContent = "x";
      deleteMember.style.cursor = "pointer";
      deleteMember.addEventListener("click", this.deleteMember);
      tableRow.appendChild(name);
      tableRow.appendChild(tel);
      tableRow.appendChild(deleteMember);
      members.append(tableRow);
    }
  };

  removeGroup = () => {
    const { groupName } = this.props;
    let group = document.getElementById(groupName);
    group.remove();
  };

  deleteMember = (e) => {
    e.target.parentElement.remove();
  };
  modalSwitch = (input, element) => {
    console.log(this.props.groupName);
    localStorage.setItem("element", element);
    localStorage.setItem("groupname", this.props.groupName);
    this.setState({ showElement: input });
  };

  render() {
    const { showElement } = this.state;
    const { groupName } = this.props;
    return (
      <div className="groupElement" id={groupName}>
        <h2>{groupName}</h2>
        <div className="table-group">
          <table>
            <thead className={`thead-${groupName}`} />
            <tbody className={`tbody-${groupName}`} />
          </table>
        </div>
        {showElement ? (
          <Modal info={this.handleInfo} close={this.modalSwitch} />
        ) : null}
        <div id={`question-${groupName}`} className="question"></div>
        <div className="buttons-group">
          <button onClick={() => this.modalSwitch(true, "Member")}>
            Add Member
          </button>
          <button
            onClick={() => this.modalSwitch(true, "Question")}
            className="sendMessage"
          >
            Ask a Question
          </button>
          <button onClick={this.removeGroup} className="deleteGroup">
            Delete Group
          </button>
          <button>Send</button>
        </div>
      </div>
    );
  }
}

export default Group;
