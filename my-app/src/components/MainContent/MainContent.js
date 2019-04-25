import React, { Component } from "react";
import Footer from "../Footer/Footer";
import "./MainContent.css";

export default class MainContent extends Component {
  constructor() {
    super();
    this.state = {
      age: "",
      data: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      age: e.target.value
    });
  }

  componentDidMount() {
    fetch("http://localhost:3001/quotes")
      .then(data => data.json())
      .then(data => console.log(data));
  }

  render() {
    console.log(this.state.age);
    return (
      <div className="middleContainer">
        <div className="container2">
          <div className="first">
            <label>Policy Maximum (Per Person)</label>
            <br />
            <select name="" id="">
              <option selected="selected" disabled>
                Choose Policy Maximum Range
              </option>
              <option value="5">$10,000 to $25,000</option>
              <option value="5">$10,000 to $25,000</option>
              <option value="5">$10,000 to $25,000</option>
              <option value="5">$10,000 to $25,000</option>
            </select>
          </div>
          <div className="second">
            <label for="">Age</label>
            <br />
            <input
              type="text"
              placeholder="Choose your age"
              value={this.state.age}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div className="container2">
          <div className="first">
            <label for="dateofbirth">Travel Date(mm/dd/yyy)</label>
            <br />
            <div className="container4">
              <input
                type="date"
                name="dateofbirth"
                id="dateofbirth"
                onChange={e => console.log(e.target.value)}
              />
              <input type="date" name="dateofbirth" id="dateofbirth2" />
            </div>
          </div>

          <div className="second">
            <label for="">Citizenship</label>
            <br />
            <input
              type="text"
              placeholder="Choose Your County of Citizenship"
            />
          </div>
        </div>

        <div className="container2">
          <div className="first">
            <label>Mailing Address State </label>
            <br />
            <select
              id="MailingState"
              className="custom-select o-Field-set__select is-Default"
            >
              <option value="" selected="selected" disabled="disabled">
                Choose Mailing Address State
              </option>
              <option value="OutsideUSA">Outside USA</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
