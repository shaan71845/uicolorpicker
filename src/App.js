import React from "react";
import "./App.css";
import Color from "./components/Color";
import Modal from "./components/Modal";
import SelectList from "./components/SelectList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorLength: 5,
      colors: [],
      showModal: false,
    };
  }

  componentDidMount() {
    let { colors } = this.state;

    for (let i = 0; i < this.state.colorLength; i++) {
      colors[i] = this.getRandomColor();
    }

    this.setState({ colors });
  }

  getRandomColor = () =>
    "#" + Math.floor(Math.random() * 16777215).toString(16);

  changeColor = e => {
    const index = e.target.parentElement.getAttribute("data-index");
    let { colors } = this.state;
    colors[index] = this.getRandomColor();

    this.setState({ colors });
  };

  copyColor = e => {
    const color = e.target.parentElement.getAttribute("data-color");
    navigator.clipboard.writeText(color);

    this.showModal();
  };

  showModal = () => {
    this.setState({ showModal: !this.state.showModal });

    setTimeout(() => {
      this.setState({ showModal: !this.state.showModal });
    }, 2000);
  };

  selectColorNumber = e => {
    const colorLength = e.target.options[e.target.selectedIndex].value;
    const { colors } = this.state;

    if (this.state.colors.length < colorLength) {
      while (colors.length !== +colorLength) {
        colors.push(this.getRandomColor());
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
        <SelectList selectColorNumber={this.selectColorNumber} />
        <div className="color-container">
          {this.state.colors.map((color, index) => (
            <Color
              copyColor={this.copyColor}
              index={index}
              color={color}
              key={this.getRandomColor().slice(1)}
              changeColor={this.changeColor}
            />
          ))}
        </div>
        <Modal showModal={this.state.showModal} />
      </div>
    );
  }
}

export default App;
