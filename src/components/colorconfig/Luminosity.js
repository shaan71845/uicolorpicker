import React from "react";

function Luminosity(props) {
  return (
    <div className="select-container">
      <label htmlFor="">Luminosity</label>
      <select
        onChange={props.handleLuminosity}
        className="select-list"
        defaultValue="Random"
      >
        <option value="Random">Random</option>
        <option value="Light">Light</option>
        <option value="Dark">Dark</option>
      </select>
    </div>
  );
}

export default Luminosity;
