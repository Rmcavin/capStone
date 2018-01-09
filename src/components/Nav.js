import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';

class Nav extends Component {
  constructor(props) {
    super(props)

    this.state = {menuOpen: false};
    this.menuToggle = this.menuToggle.bind(this)
  }

  menuToggle(styles) {
    this.state.menuOpen === false ? this.setState({menuOpen:true}) : this.setState({menuOpen:false}) ;
    return styles;
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    //styles
    const styles = StyleSheet.create({
      navBar : {
        width : '100%',
        background : 'linear-gradient(45deg, #1d3549, #40617c)',
        color : 'white',
        padding : 10,
        display : 'flex',
        justifyContent : 'space-between',
        alignContent : 'center',
        flexWrap : 'nowrap',
      },
      title : {
        marginLeft: 30,
        fontSize: 24
      },
      dropBtn : {
        '@media (max-width: 768px)': {
          display: 'block'
        },
        backgroundColor: 'transparent',
        color: 'white',
        padding: 5,
        fontSize: 24,
        border: 'none',
        cursor: 'pointer',
        display: 'none',
        alignContent: 'center'
      },
      dropDown : {
        position: 'relative',
        display: 'inlineBlock',
        marginRight: 40,
        marginTop: 20
      },
      dropDownContent : {
        '@media (min-width: 768px)': {
          paddingRight: 30,
          position: 'relative',
          display: 'block',
          backgroundColor: 'transparent',
          boxShadow: 'none'
        },
      },
      open : {
        display: 'block',
        right: 0,
        position: 'absolute',
        transform: 'translateX(-200)',
        backgroundColor: '#333333',
        color: 'white',
        minWidth: 160,
        boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
        zIndex: 1
      },
      closed : {
        display: 'none',
        position: 'absolute',
        marginRight: 10,
        backgroundColor: '#333333',
        color: 'white',
        minWidth: 160,
        boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
        zIndex: 1
      },
      dropDownLink : {
        '@media (min-width: 768px)': {
          display: 'inline'
        },
        color: 'white',
        padding: 10,
        textDecoration: 'none',
        display: 'block'
      },
      DropDownLinkhover : {
        'hover:' : {
          color: 'steelblue'
      }
      }
    });

    return (
      <nav className = {css(styles.navBar)}>
        <h3 className = {css(styles.title)}>ScoreKeeper</h3>
        <div className = {css(styles.dropDown)} onClick = {() => this.menuToggle(styles)}>
          <button className = {css(styles.dropBtn, styles.largeIcon)}>
            <i className ='fa fa-bars'aria-hidden="true">
            </i>
          </button>
          <div className = {css(this.state.menuOpen ? styles.open : styles.closed, styles.dropDownContent )}>
            <a href='#' className = {css(styles.dropDownLink, styles.DropDownLinkhover)}>Sample 1</a>
            <a href='#' className = {css(styles.dropDownLink, styles.DropDownLinkhover)}>Sample 2</a>
            <a href='#' className = {css(styles.dropDownLink, styles.DropDownLinkhover)}>Sample 3</a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav;
