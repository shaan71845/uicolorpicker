import React from 'react';

class Format extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div className="select-container">
        <label htmlFor="">Type</label>
        <select onChange={this.props.handleColorFormat} className="select-list" defaultValue="HEX">
          <option value="HEX">HEX</option>
          <option value="RGB">RGB</option>
          <option value="HSL">HSL</option>
        </select>
      </div>
    );
  }

}

export default Format;