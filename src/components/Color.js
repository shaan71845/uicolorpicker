 import React from "react";

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "" };
    
  }

  static getDerivedStateFromProps(props) {
    return { color: props.color };
  }

  render() {
    return (
      <div
        className="color"
        data-color={this.state.color}
        data-index={this.props.index}
      >
        <div
          onClick={this.props.copyColor}
          className="color-img"
          title="Click to copy me!"
          style={{ background: this.state.color }}
        ></div>
        <button
          type="button"
          onClick={this.props.changeColor}
          className="change-btn"
        >
          CHANGE
        </button>
      </div>
    );
  }
}

export default Color;
