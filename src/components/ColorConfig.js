import React from 'react';
import ColorLength from './ColorLength';
import Luminosity from './Luminosity';
import Format from './Format';
// import Alpha from './Alpha';


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
        {/* <Alpha value={1} changeColorAlpha={this.props.changeColorAlpha} /> */}
      </div>
    );
  }

}

export default ColorConfig;