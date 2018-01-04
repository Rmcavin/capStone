import React, {Component} from 'react';

class Nav extends Component {
  constructor(props) {
    super(props)

    this.state = null;
  }

  render() {
    return (
      <nav className = 'navBar'>
        <h3>The App Name</h3>
        <div className = 'dropDown'>
          <button className = "dropBtn"><i className = 'fa fa-bars' aria-hidden="true"></i></button>
          <div className = 'dropDownContent'>
            <a href='#'>Sample 1</a>
            <a href='#'>Sample 2</a>
            <a href='#'>Sample 3</a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav;
