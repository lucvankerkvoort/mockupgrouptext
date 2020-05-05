import React from "./node_modules/react";
import Questionaire from "./questionaire";

class Modal extends React.Component {
  close = () => {
    this.props.close(false);
  };
  handleInfo = (input) => {
    this.props.info(input);
  };
  render() {
    return (
      <div className="wrapper">
        <h2 className="close" onClick={this.close}>
          X
        </h2>
        <div className="screen">
          <Questionaire info={this.handleInfo} close={this.close} />
        </div>
      </div>
    );
  }
}

export default Modal;
