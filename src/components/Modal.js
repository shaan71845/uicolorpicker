import React from "react";

function Modal(props) {
  return (
    <div
      className={props.modal.showModal ? "modal active" : "modal"}
      style={{ backgroundColor: props.modal.modalColor }}
    >
      <p>Copied....</p>
    </div>
  );
}

export default Modal;
