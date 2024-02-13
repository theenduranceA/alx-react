import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem'
import close_icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import PropTypes from 'prop-types';

const buttonClick = () => {
  console.log('Close button has been clicked');
}

const buttonStyle = {
  background: 'transparent',
  border: 'none',
  display: 'flex',
  justifyContent: 'flex-end',
  outline: 'none',
  width: '100%',
}

const imageStyle = {
  width: '.7rem',
  height: '.7rem',
}

class Notifications extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { listNotifications } = this.props;
    if (this.props.listNotifications.length < nextProps.listNotifications.length) return true
    return false;
  }
  
  render() {
    return (
      <div className={css(style.notificationContainer)}>
        <div className={css(style.menuItem)} id="menuItem">Your notifications</div>
        { this.props.displayDrawer ?
          (<div className={css(style.notifications)} id="notifications">
            <button style={btnStyle} aria-label='Close' onClick={() => console.log('Close button has been clicked')}>
              <img src={close_icon} style={imgStyle}/>
            </button>
            <p>Here is the list of notifications</p>
            <ul className={css(style.ulStyle)}>
              {this.props.listNotifications.length === 0 ? (<NotificationItem id={0} value="No new notification for now" type='no-new' markAsRead={this.markAsRead} />) : <></>}
              {this.props.listNotifications.map((list) => (<NotificationItem id={list.id} key={list.id} type={list.type} value={list.value} html={list.html} markAsRead={this.markAsRead} />))}
            </ul>
          </div>)
          : <></>
        }
      </div>
    );
  }
  
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`)
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};

const style = StyleSheet.create({
  root: {
    colorBlue: "#0000ff",
    colorRed: "ff0000",
  },
  
  Notifications: {
    border: "2px dashed #E0434C",
    padding: "1rem",
    marginBottom: "1rem",
    position: "absolute",
    right: "0",
  },

  menuItem: {
    textAlign: "right",
    marginRight: "0.5rem",
  },

  ul: {
    paddingRight: "3rem",
  },

  li: {
    marginLeft: "2.5rem",
  }
});

export default Notifications;