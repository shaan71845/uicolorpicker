import React from "react";

function Format(props) {
  return (
    <div className="select-container">
      <label>Type</label>
      <select
        onChange={props.handleColorFormat}
        className="select-list"
        defaultValue="HEX"
      >
        <option value="HEX">HEX</option>
        <option value="RGB">RGB</option>
        <option value="HSL">HSL</option>
      </select>
    </div>
  );
}

export default Format;
