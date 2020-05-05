import React from "react";

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "" };
  }

  static getDerivedStateFromProps (props) {
    return { color: props.color };
  }

  render() {
    return (
      <div className="color" data-color={this.props.color} data-index={this.props.index}>
        <div onClick={this.props.copyColor} className="color-img" style={{ background: this.state.color }}></div>
        <button type="button" onClick={this.props.changeColor} className="change-btn">Change</button>
      </div>
    );
  }
}


export default Color;