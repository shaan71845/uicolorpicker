import React from "react";
import "./App.css";
import Color from "./components/Color";
import Modal from "./components/Modal";
import randomColor from "randomcolor";
import ColorConfig from "./components/ColorConfig";
import { v4 } from "uuid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorConfig: {
        luminosity: "random",
        hue: "random",
        format: "hex",
        colorLength: 5,
        colors: [],
      },
      modal: {
        showModal: false,
        modalColor: "",
      },
    };
  }

  componentDidMount() {
    this.changeAllColors();
  }

  changeAllColors = () => {
    let { colorConfig } = this.state;

    for (let i = 0; i < this.state.colorConfig.colorLength; i++) {
      colorConfig.colors[i] = randomColor(this.state.colorConfig);
    }

    this.setState({ colorConfig });
  };

  changeColor = e => {
    const index = [...e.target.parentElement.parentElement.children].indexOf(
      e.target.parentElement
    );
    let { colorConfig } = this.state;
    colorConfig.colors[index] = randomColor(this.state.colorConfig);

    this.setState({ colorConfig });
  };

  copyColor = e => {
    const color = e.target.nextElementSibling.value;
    navigator.clipboard.writeText(color);

    this.showModal(color);
  };

  showModal = color => {
    const { modal } = this.state;

    modal.showModal = !modal.showModal;
    modal.modalColor = color;

    this.setState({ modal });

    setTimeout(() => {
      modal.showModal = !modal.showModal;
      this.setState({ modal });
    }, 2000);
  };

  handleColorLength = e => {
    const colorLength = e.target.options[e.target.selectedIndex].value;
    const { colorConfig } = this.state;

    if (this.state.colorConfig.colors.length < colorLength) {
      while (colorConfig.colors.length !== +colorLength) {
        colorConfig.colors.push(randomColor());
      }
    } else {
      colorConfig.colors.splice(colorLength);
      colorConfig.colorLength = colorConfig.colors.length;
    }

    this.setState({ colorConfig });
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

  render() {
    return (
      <div className="container">
        <h1 className="wow fadeInUp">
          <span role="img" aria-label="emoji">
            ⛏
          </span>
          UI Color Picker
        </h1>
        <ColorConfig
          handleColorLength={this.handleColorLength}
          handleLuminosity={this.handleLuminosity}
          handleColorFormat={this.handleColorFormat}
        />
        <div className="color-container">
          {this.state.colorConfig.colors.map((color, index) => (
            <Color
              copyColor={this.copyColor}
              color={color}
              key={v4()}
              changeColor={this.changeColor}
            />
          ))}
        </div>
        <Modal modal={this.state.modal} />
      </div>
    );
  }
}

export default App;
