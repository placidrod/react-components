var GroceryList = () => (
  <ul>
    <GroceryListItem item='mango' />
    <GroceryListItem item='apple' />
  </ul>
);

var GroceryListItem = (props) => (
  <li>{props.item}</li>
);

var Mango = () => (
  <li>mango</li>
);

var Apple = () => (
  <li>apple</li>
);

ReactDOM.render(<GroceryList />, document.getElementById("app"));