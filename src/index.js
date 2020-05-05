import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// This tag syntax is neither a string nor HTML, it's JSX. JSX is a syntax extension to JavaScript.

// Embedding expressions in JSX
// const name = "Shaan Alam";
// const element = <h1>Hello world! My name is {name}</h1>;

// ReactDOM.render(element, document.querySelector("#root"));

/* 

  JSX is an expression too
  After compilation, JSX expressions become regular Javascript function calls and evaluate to javascript objects.

  function getGreeting (user) {
    if (user) {
      return <h1>hello, formatName(user)</h1>;
    }
    return <h1>Hello stranger!</h1>;
  }


  * We may use quotes to specify string literals as attributes
  const element = <div tabIndex="0"></div>;
  or
  const image = <img src={img.src} />

  * We may also use curly braces to embed a javascript expression in an attribute;

  * HTML attributes are named accoring to the camelCase convention in React. for Example class becomes className, & tabindex becomes tabIndex

*/

/* 

  * if a tag is empty we must close it immediately with self closing tag like XML

  const element = <img src={img.src} />;

  * JSX may contain children;
  const element = (
    <div>
      <h1>Hello </h1>
      <h2>Good to see you here. </h2>
    </div>
  );

  * JSX prevents injection attacks. By default React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that's not explicitly written in your application. Everything is converted to a string before being rendered. This helps preventing XSS attacks.
*/


/* 

  Babel compiles JSX down to React.createElement() calls
  const element = <h1 className="greeting">Hello World !</h1> is equivalent to 

  const element = React.createElement('h1', {className: 'greeting'}, 'Hello World!');

*/

/* 

  Elements are what components are "made of"
  elements < components

  Rendering an element into the DOM
  =======================================

  <div id="root"></div>
  We call this a "root" DOM node because everything inside it will be managed by React DOM.

  Applications built with just react usually have a single root DOM node. If you are integrating React into an existing app, you may have as many isolated root DOM nodes as you like.

*/


/* 
  React elements are immutable. Once we create an element, we can't change its children or attributes. An element is like a single frame in a movie. It represents the UI at a certain point in time.
*/

// function tick () {
//   const element = (
//     <div> 
//       <h1>Hello world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);

/* 

React only updates what's necessary.
React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.

Even though we create an element describing the whole UI tree on every tick, only the text node whose contents have changed gets updated by React

*/



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
