import React from 'react';
/* Components */
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import { getLatestNotification } from '../utils/utils';
/* Proptypes */
import PropTypes from 'prop-types';
/* Styles */
import './App.css';

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

class App extends Component {
  render (){
    return (
      <>
        <Notifications listNotifications={listNotifications} />
        <div className="App">
          {/* Header */}
          <Header />
          {/* Body */}
          {this.props.isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
          {/* Footer */}
          <Footer />
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;