import React, { Component } from "react";
import "./card.css";

export default class card extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      input: "",
      value: ""
    };
    this.renderList = this.renderList.bind(this);
    this.change = this.change.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:3001/quotes")
      .then(data => data.json())
      .then(data =>
        this.setState({
          data: data
        })
      );
  }

  renderList() {
    var filterdata = this.state.data.sort((a, b) => {
      return this.state.value === "Sort by Name"
        ? a.price - b.price
        : b.price - a.price;
    });
    return filterdata.map(el => {
      return (
        <div key={el.id} className="cards">
          <div className="card-item">
            <div className="card-image" />
            <div className="card-info">
              <h2 className="card-title">{el.name}</h2>
              <h2>${el.price}.00</h2>
              <p>Section: {el.section}</p>
              <p className="card-intro">{el.description}</p>
            </div>
          </div>
        </div>
      );
    });
  }

  change(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    console.log(this.state.value);
    return (
      <React.Fragment>
        <select onChange={this.change}>
          <option selected="selected" disabled="disabled">
            Sort by Price
          </option>
          <option>Sort By Low To High</option>
          <option>Sort By High To Low</option>
        </select>
        <div className="container6">{this.renderList()}</div>;
      </React.Fragment>
    );
  }
}
