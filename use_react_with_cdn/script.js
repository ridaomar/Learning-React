const name = "Rida";
const formatName = function(name) {
  return name.toUpperCase();
}

const result = 
<div>
  <h1>Hi {formatName(name)}</h1>
  <p>Your result is: {0.25*100} points.</p>
</div>

ReactDOM.render(
  result,
  document.getElementById('root')
);
