var GroceryList = () => (
  <ul>
    <GroceryListItem item='mango' />
    <GroceryListItem item='apple' />
  </ul>
);

class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      bold: false
    };
  }

  onListItemMouseOver() {
    this.setState({
      bold: !this.state.bold
    });
  }

  render() {

    var style = {
      fontWeight: this.state.bold ? 'bold' : 'normal'
    };
    return (
      <li style={style} onMouseOver={this.onListItemMouseOver.bind(this)}>{this.props.item}</li>
    );
  }
}


ReactDOM.render(<GroceryList />, document.getElementById("app"));


// var GroceryListItem = (props) => (
//   <li>{props.item}</li>
// );

// var Mango = () => (
//   <li>primitive mango</li>
// );

// var Apple = () => (
//   <li>apple</li>
// );