import React from 'react';

function Hue (props) {
  return (
    <div className="select-container">
      <label>Hue</label>
      <select onChange={props.handleHue} className="select-list" defaultValue="Random">
        <option value="Random">Random</option>
        <option value="Red">Red</option>
        <option value="Orange">Orange</option>
        <option value="Blue">Blue</option>
        <option value="Yellow">Yellow</option>
        <option value="Green">Green</option>
        <option value="Purple">Purple</option>
        <option value="Pink">Pink</option>        
      </select>
    </div>
  );
}

export default Hue;