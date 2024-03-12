import React from 'react';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { getLatestNotification } from '../utils/utils';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { user, logOut } from './AppContext';
import AppContext from './AppContext';
import { connect } from 'react-redux';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 }
];

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification()} }
];

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      user: user,
      logOut: this.logOut,
      listNotifications: listNotifications,
    };
  }
  
  componentDidMount() {
    document.addEventListener("keydown", this.handleClick);
  }
  
  handleClick(event) {
    if (event.keyCode === 72 && event.ctrlKey) {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render() {
    const { user, logOut, listNotifications } = this.state;
    const { isLoggedIn, displayDrawer, displayNotificationDrawer, hideNotificationDrawer } = this.props;
    return (
      <>
        <Notifications
          displayDrawer={displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
        />
        <div className='App'>
          <Header></Header>
          <div className={css(style.appBody)}>
            {user.isLoggedIn ? 
              <BodySectionWithMarginBottom title='Course list'>
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom> :
              <BodySectionWithMarginBottom title='Log in to continue'>
                <Login logIn={logIn} />
              </BodySectionWithMarginBottom>
            }
            <BodySection title='News from the School'>
              <p>So, here i am testing out my frontend skills. Feels good, ABSOLUTELY!!!</p>
            </BodySection>
          </div>
          <div className={css(style.footer)}>
            <Footer></Footer>
          </div>
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
  login: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
  login: () => {},
};

  
const style = StyleSheet.create({
  appBody: {
    backgroundColor: '#fff',
    padding: '4rem',
    minHeight: '26rem',
  },

  appFooter: {
    backgroundColor: '#fff',
    textAlign: 'center',
    width: '100%',
    bottom: '0px',
    borderTop: '3px solid #e1354b',
    fontStyle: 'italic',
    padding: '1rem 0'
  }
});
  
export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get('isUserLoggedIn'),
    displayDrawer: state.get("isNotificationDrawerVisible")
  };
};

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  login,
  logout
};

export default connect(mapStateToProps, mapDispatchToProps)(App);