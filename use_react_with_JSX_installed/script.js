var name = "Rida";
var formatName = function formatName(name) {
  return name.toUpperCase();
};

var result = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Hi ",
    formatName(name)
  ),
  React.createElement(
    "p",
    null,
    "Your result is: ",
    0.25 * 100,
    " points."
  )
);

ReactDOM.render(result, document.getElementById('root'));