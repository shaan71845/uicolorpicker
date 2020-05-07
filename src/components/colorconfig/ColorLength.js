import React from "react";

function ColorLength (props) {
  return (
    <div className="select-container">
      <label>Number of colors: </label>
      <select
        className="select-list"
        id="select-list"
        onChange={props.handleColorLength}
        defaultValue={10}
      >
        <option value="10">10</option>
        <option value="9">9</option>
        <option value="8">8</option>
        <option value="7">7</option>
        <option value="6">6</option>
        <option value="5">5</option>
        <option value="4">4</option>
        <option value="3">3</option>
        <option value="2">2</option>
        <option value="1">1</option>
      </select>
    </div>
  );
}

export default ColorLength;
