import Component from './Component.js';

class Sidebar extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    let responseHTML = '';

    this.props.menu.forEach( (item) => {
      // NEED- Add (concatenate) the value of each item to the variable responseHTML. Each should be wrapped in <li></li>
      // javascript literal template
      responseHTML += `<li>${item}</li>` //diff way to list
      // <li>Albert Eggstein</li>
    });

    return '<ul>'+responseHTML+'</ul>';
  }
}

export default Sidebar;
