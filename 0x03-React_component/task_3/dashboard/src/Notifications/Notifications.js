import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem'
import close_icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import { bool } from 'prop-types';

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

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }
  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
      <>
      <div className="menuItem">Your notifications</div>
      {displayDrawer ?
        <div className="Notifications">
          <button onClick={() => buttonClick()} aria-label="Close" style={buttonStyle}>
            <img alt="close icon" src={close_icon} style={imageStyle}/>
          </button>
          <p>Here is the list of notifications</p>
          <ul style={{position: 'relative'}}>
            {listNotifications.length === 0 ? (<NotificationItem value="No new notification for now" type='no-new' />) : <></>}
            {listNotifications.map((notification) => (<NotificationItem key={ notification.id } type={ notification.type } value={ notification.value } html={ notification.html } markAsRead={this.markAsRead} />))}
          </ul>
        </div>
        : <></>
      }
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: bool,
  listNotifications: arrayOf(NotificationItemShape),
};

Notifications.propTypes = {
  displayDrawer: bool,
  listNotifications: arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;