import React from "react";
import "./App.css";
import Color from "./components/Color";
import Modal from "./components/Modal";
import randomColor from "randomcolor";
import ColorConfig from "./components/ColorConfig";
import v4 from 'uuid';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorConfig: {
        luminosity: "random",
        hue: "random",
        format: "hex"
      },
      colorLength: 5,
      colors: [],
      showModal: false,
      modalColor: "",
    };
  }

  componentDidMount() {
    this.changeAllColors();
  }

  changeAllColors = () => {
    let { colors } = this.state;

    for (let i = 0; i < this.state.colorLength; i++) {
      colors[i] = randomColor(this.state.colorConfig);
    }

    this.setState({ colors });
  };

  handleLuminosity = e => {
    const luminosity = e.target.options[e.target.selectedIndex].value;

    let { colorConfig } = this.state;
    colorConfig.luminosity = luminosity;

    this.setState({ colorConfig });

    this.changeAllColors();
  };

  handleColorFormat = e => {
    let { colorConfig } = this.state;

    let colorFormat = e.target.options[e.target.selectedIndex].value;
    colorConfig.format = colorFormat.toLowerCase();
    this.setState({ colorConfig });

    this.changeAllColors();
  };

  changeColorLuminosity = e => {};

  changeColor = e => {
    const index = e.target.parentElement.getAttribute("data-index");
    let { colors } = this.state;
    colors[index] = randomColor(this.state.colorConfig);

    this.setState({ colors });
  };

  copyColor = e => {
    const color = e.target.parentElement.getAttribute("data-color");
    navigator.clipboard.writeText(color);

    this.showModal(color);
  };

  showModal = color => {
    this.setState({ showModal: !this.state.showModal, modalColor: color });

    setTimeout(() => {
      this.setState({ showModal: !this.state.showModal });
    }, 2000);
  };

  selectColorNumber = e => {
    const colorLength = e.target.options[e.target.selectedIndex].value;
    const { colors } = this.state;

    if (this.state.colors.length < colorLength) {
      while (colors.length !== +colorLength) {
        colors.push(randomColor());
      }
    } else {
      colors.splice(colorLength);
    }

    this.setState({ colorLength, colors });
    console.log(colors);
  };

  render() {
    return (
      <div className="container">
        <h1>
          <span role="img" aria-label="emoji">
            ⛏{" "}
          </span>
          UI Color Picker
        </h1>
        <ColorConfig
          selectColorNumber={this.selectColorNumber}
          handleLuminosity={this.handleLuminosity}
          handleColorFormat={this.handleColorFormat}
        />
        <div className="color-container">
          {this.state.colors.map((color, index) => (
            <Color
              copyColor={this.copyColor}
              index={index}
              color={color}
              key={v4()}
              changeColor={this.changeColor}
            />
          ))}
        </div>
        <Modal
          showModal={this.state.showModal}
          modalColor={this.state.modalColor}
        />
      </div>
    );
  }
}

export default App;
