import React from 'react';
import ColorLength from './colorconfig/ColorLength';
import Luminosity from './colorconfig/Luminosity';
import Format from './colorconfig/Format';


class ColorConfig extends React.Component {
  constructor (props) {
    super(props);    
    this.state = {};
  }


  render () {
    return (
      <div className="config">
        <ColorLength selectColorNumber={this.props.selectColorNumber} />
        <Luminosity handleLuminosity={this.props.handleLuminosity} />
        <Format handleColorFormat={this.props.handleColorFormat} />
      </div>
    );
  }

}

export default ColorConfig;