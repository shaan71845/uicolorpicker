import React from "react";

class Luminosity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="select-container">
        <label htmlFor="">Luminosity</label>
        <select onChange={this.props.handleLuminosity} className="select-list" defaultValue="Random">
          <option value="Random">Random</option>
          <option value="Light">Light</option>
          <option value="Dark">Dark</option>
        </select>
      </div>
    );
  }
}

export default Luminosity;