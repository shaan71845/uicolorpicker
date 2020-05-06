import React from 'react';


class SelectList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedValue: ''
    }
  }


  render () {
    return (
      <div className="select-container">
        <label htmlFor="">Number of colors: </label>
        <select className="select-list" id="select-list" onChange={this.props.selectColorNumber} defaultValue={5}>
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
        </select>
      </div>
    );
  }

}

export default SelectList;