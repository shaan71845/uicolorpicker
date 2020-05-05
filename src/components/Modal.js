import React from "react";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  static getDerivedStateFromProps (props) {
    return { showModal: props.showModal };
  }

  render() {
    return (
      <div className={(this.state.showModal ? 'modal active' : 'modal')}>
        <p>Copied....</p>
      </div>
    );
  }
}

export default Modal;
