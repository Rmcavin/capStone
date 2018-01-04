import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';

class Signin extends Component {
  constructor(props) {
    super(props)

    this.state = {userType:null,
                  user:null
                  };
    this.teacherUser = this.teacherUser.bind(this);
    this.studentUser = this.studentUser.bind(this)

  }

  teacherUser() {
    this.setState({userType:'teacher'})
  }

  studentUser() {
    this.setState({userType:'student'})
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {

    //styles
    const styles = StyleSheet.create({
      section : {
        margin: 'auto',
        marginTop: 50,
        width: '25%',
        padding: 100,
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'none',
        justifyContent: 'center',
        alignContent: 'center',
        boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
      },
      buttonBar : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
      },
      button : {
        backgroundColor: '#2b506e',
        padding: 5,
        color: 'white',
        margin: 5
      },
      formElements : {
        display: 'block',
        width: '80%',
        margin: 'auto',
        marginTop: 10,
        textAlign: 'center'
      },

    });

    return (
      <section className='SignIn'>
        <div className={css(styles.section)}>
          <div className={css(styles.buttonBar)}>
            <button className={css(styles.button)} id="teacher" onClick={ () => this.teacherUser() }>Teacher</button>
            <button className={css(styles.button)} id="student" onClick={ () => this.studentUser() }>Student</button>
          </div>

          { this.state.userType === null || this.state.userType === 'teacher' ? (
            <form>
              <label className={css(styles.formElements)}>Teacher Username:</label>
              <input className={css(styles.formElements)} type='text' name='teacherUserName' />
              <label className={css(styles.formElements)}>Teacher Password:</label>
              <input className={css(styles.formElements)} type='password' name='teacherPassWord' />
            </form>
            ) : (
              <form>
                <label className={css(styles.formElements)}>Student Username:</label>
                <input className={css(styles.formElements)} type='text' name='studentUserName' />
                <label className={css(styles.formElements)}>Student Password:</label>
                <input className={css(styles.formElements)} type='password' name='studentPassWord' />
              </form>
            )
          }
        </div>
      </section>
    )
  }
}

export default Signin;
