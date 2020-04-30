import React from "react";
import Modal from "../Components/Modal";
import { member } from "../Components/Questions";

class CreateGroup extends React.Component {
  state = {
    groups: [],
    value: "",
    showElement: false,
  };

  handleChange = (e) => {};
  handleClick = (e) => {};
  handleInfo = (input) => {
    this.setState((state) => {
      const groups = state.groups.concat(input);
      return {
        groups,
      };
    });
  };
  showElement = (input) => {
    this.setState({ showElement: input });
  };
  render() {
    const { showElement, groups } = this.state;
    return (
      <div className="CreateGroup">
        {showElement ? (
          <Modal close={this.showElement} info={this.handleInfo} />
        ) : null}
        <div
          className="addGroup"
          onClick={() => {
            localStorage.setItem("element", "Group");
            this.showElement(true);
          }}
        >
          Add a Group +
        </div>
        <div className="addedGroups">
          {(groups || []).map((element, i) => {
            return (
              <div key={i} className="groupElement">
                <h2>{element.groupName}</h2>
                {member.map((element, i) => {
                  return (
                    <form>
                      <input
                        name={element.name}
                        type={element.type}
                        placeholder={element.placeholder}
                        onChange={this.handleChange}
                      />
                      <button onClick={this.handleClick}>Submit</button>
                    </form>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default CreateGroup;
