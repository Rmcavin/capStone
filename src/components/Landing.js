import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';

//components
import TeacherLogIn from './teacherLogIn'
import TeacherSignUp from './teacherSignUp'
import StudentLogIn from './studentLogIn'
import StudentSignUp from './studentSignUp'

class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {userType:'teacher',
                  userAction:'logIn',
                  user:null
                  };
    this.typeOfUser = this.typeOfUser.bind(this);
    this.actionOfUser = this.actionOfUser.bind(this)

  }

  //sets the user type as student or teacher
  typeOfUser(type) {
    this.setState({userType:type})
  }

  //sets the user action and login or signup
  actionOfUser(action) {
    this.setState({userAction:action})
  }

  // determineView(type, action) {
  //   let form = null;
  //   console.log(type, action);
  //   console.log(TeacherLogIn);
  //   if (action === 'logIn' && type === 'teacher') {
  //     form = <TeacherLogIn logIn={this.props.logIn}/>;
  //   }
  //   else if (action === 'logIn' && type === 'student') {
  //     form = <StudentLogIn logIn={this.props.logIn}/>
  //   }
  //   else if (action === 'signUp' && type === 'teacher') {
  //     form = <TeacherSignUp logIn={this.props.logIn}/>
  //   }
  //   else if (action === 'signUp' && type === 'student') {
  //     return (
  //       form = <StudentSignUp />
  //     )
  //   }
  //   return form;
  // }

  render() {
    console.log(this.props.logIn);
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
      sectionSmall : {
        '@media (max-width: 600px)': {
          width: '80%',
          padding: 20,
        }
      }
    });
    let form;
    if (this.state.userAction === 'logIn' && this.state.userType === 'teacher') {
      form = <TeacherLogIn logIn={this.props.logIn}/>;
    }
    else if (this.state.userAction === 'logIn' && this.state.userType === 'student') {
      form = <StudentLogIn logIn={this.props.logIn}/>
    }
    else if (this.state.userAction === 'signUp' && this.state.userType === 'teacher') {
      form = <TeacherSignUp logIn={this.props.logIn}/>
    }
    else if (this.state.userAction === 'signUp' && this.state.userType === 'student') {
        form = <StudentSignUp />
    }

    return (
      <section className='SignIn' className={css(styles.section, styles.sectionSmall)}>
        <div>
          {/*Sign in or Log in*/}
          <div className={css(styles.buttonBar)}>
            <button type="button" autoFocus={true} className={css(styles.button)} id="logIn" onClick={ () => this.actionOfUser('logIn') }>Log In</button>
            <button type="button" className={css(styles.button)} id="signUp" onClick={ () => this.actionOfUser('signUp') }>Sign Up</button>
          </div>
          {/*Teacher or Student*/}
          <div className={css(styles.buttonBar)}>
            <button type="button" className={css(styles.button)} id="teacher" onClick={ () => this.typeOfUser('teacher') }>Teacher</button>
            <button type="button" className={css(styles.button)} id="student" onClick={ () => this.typeOfUser('student') }>Student</button>
          </div>
          {form}
        </div>
      </section>
    )
  }
}

export default Landing;
