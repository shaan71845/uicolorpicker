import React from "react";

class Alpha extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  componentDidUpdate() {
    this.props.changeColorAlpha(this.state.alpha);
  }

  changeAlpha = e => {
    let value = 0;

    if (e.target.value > 1) {
      value = 1;
    } else {
      value = e.target.value;
    }

    this.setState({ value });
  };

  render() {
    return (
      <div className="select-container">
        <label htmlFor="">Alpha</label>
        <input
          onChange={this.changeAlpha}
          type="number"
          className="select-list"
          placeholder="Alpha Value"
          value={this.state.value}
        />
      </div>
    );
  }
}

export default Alpha;
