import React from "react";
import navbarItems from "./Navbar-items";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  // location = (link) => {
  //   console.log(link);
  // link ? console.log("elementLink", link) : console.log(this.location());
  // console.log(window.history.go(-1));
  //   return link;
  // };
  handleClick = (element) => {
    const { showElement } = this.props;
    if (element === "Login" || element === "Register") {
      localStorage.setItem("element", element);
      showElement(true);
    }
  };

  render() {
    return (
      <div className="navbar">
        <div className="logo">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <p>Group Text</p>
          </Link>
        </div>
        <div className="navbar-items">
          {navbarItems.map((element, i) => {
            if (element.name === "Login" || element.name === "Register") {
              return (
                <p key={i} onClick={() => this.handleClick(element.name)}>
                  {element.name}
                </p>
              );
            } else {
              return (
                <Link
                  key={i}
                  to={element.link}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <p key={i} onClick={() => this.handleClick(element.name)}>
                    {element.name}
                  </p>
                </Link>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default Navbar;
