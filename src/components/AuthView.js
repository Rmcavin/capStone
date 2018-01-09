import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';

class AuthView extends Component {

  determineView(action, type, styles) {

    if (action === 'logIn' && type === 'teacher') {
      return (
        <form className={css(styles.form)}>
          <label className={css(styles.label)}>Teacher Username: </label>
          <input type='text' name='teacherUserName' className={css(styles.input)} />
          <label className={css(styles.label)}>Teacher Password: </label>
          <input type='text' name='teacherPassWord' className={css(styles.input)} />
          <input type='submit' className={css(styles.submit)} />
        </form>
      )
    }
    else if (action === 'signUp' && type === 'teacher') {
      return (
        <form className={css(styles.form)}>
          <label className={css(styles.label)}>Teacher Username: </label>
          <input type='text' name='teacherUserName' className={css(styles.input)} />
          <label className={css(styles.label)}>Teacher Password: </label>
          <input type='text' name='teacherPassWord' className={css(styles.input)} />
          <select name='teacherTitle' className={css(styles.select)}>
            <option>Ms.</option>
            <option>Mrs.</option>
            <option>Miss</option>
            <option>Mr.</option>
            <option>Dr.</option>
          </select>
          <label className={css(styles.label)}>Teacher First Name: </label>
          <input type='text' name='teacherFirstName' className={css(styles.input)} />
          <label className={css(styles.label)}>Teacher Last Name: </label>
          <input type='text' name='teacherLastName' className={css(styles.input)} />
          <input type='submit' className={css(styles.submit)} />
        </form>
      )
    }
    else if (action === 'logIn' && type === 'student') {
      return (
        <form className={css(styles.form)}>
          <label className={css(styles.label)}>Student Username: </label>
          <input type='text' name='studentUserName' className={css(styles.input)} />
          <label className={css(styles.label)}>Student Password: </label>
          <input type='text' name='studentPassWord' className={css(styles.input)} />
          <input type='submit' className={css(styles.submit)} />
        </form>
      )
    }
    else if (action === 'signUp' && type === 'student') {
      return (
        <div className={css(styles.div)}>
          Please log in using username and password provided by your teacher.
        </div>
      )
    }

  }

  componentWillReceiveProps(nextProps) {
    console.log('props',nextProps);
  }

  render() {
    //styles
    const styles = StyleSheet.create({
      label : {
        margin: 5,
        width: '100%'
      },
      select : {
        margin: 5,
        width: '50%'
      },
      input : {
        margin: 5,
        width: '100%'
      },
      submit : {
        backgroundColor: '#2b506e',
        padding: 5,
        color: 'white',
        margin: 5
      },
      form : {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%'
      },
      div : {
        textAlign: 'center',
        margin: 5
      }
    });

    return (
      this.determineView(this.props.userAction, this.props.userType, styles)
    )
  }
}

export default AuthView;
