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

  componentWillUnmount(){
    document.body.style.backgroundImage = null;
    document.body.style.backgroundRepeat = null;
  }

  //sets the user type as student or teacher
  typeOfUser(type) {
    this.setState({userType:type})
  }

  //sets the user action and login or signup
  actionOfUser(action) {
    this.setState({userAction:action})
  }

  render() {
    document.body.style.height = '100vh'
    document.body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1509062522246-3755977927d7")';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundSize = 'cover';
    //styles
    const styles = StyleSheet.create({

      section : {
        fontFamily: 'Roboto',
        backgroundColor: 'white',
        margin: 'auto',
        marginTop: 50,
        width: '25%',
        padding: 50,
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'none',
        justifyContent: 'center',
        alignContent: 'center',
        boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
      },
      subtitle : {
        textAlign: 'center',
        fontFamily: 'Roboto',
        color: 'steelblue',
        margin: 5
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
        '@media (max-width: 650px)': {
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
        <h3 className={css(styles.subtitle)}>Focus on what matters, </h3>
        <h3 className={css(styles.subtitle)}>we'll handle the rest. </h3>
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
