console.log(React);
console.log(ReactDOM);

const reactElement = React.createElement(
  "h1",
  {},
  React.createElement("span", {}, "Hello World")
);

const listReactElement = React.createElement(
  "ul",
  {},
  React.createElement("li", {}, "First Item"),
  React.createElement("li", {}, "Second Item")
);

const App = React.createElement("div", {}, reactElement, listReactElement);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(App);
