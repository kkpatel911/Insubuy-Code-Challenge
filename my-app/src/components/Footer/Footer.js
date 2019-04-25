import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="container3">
        <button className="button_getquote">get quotes</button>
        <p className="resettag">
          {" "}
          <a href="#">Reset Form</a>
        </p>
      </div>
    );
  }
}
