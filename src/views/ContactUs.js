import React, { Component } from "react";
import ReactDOM from "react-dom";
import PageNavBar from "../components/PageNavBar";
import "../styles/skeleton.scss";

class ContactUs extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        value
      };
    });
  }

  render() {
    return (
      <div>
        <PageNavBar />
        <div className="mainbody">
          <input type="text"></input>
        test
        </div>
      </div>
    )
  }
}

export default ContactUs;