import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Test Notification.js', () => {
  it('Notification without crashing', (done) => {
    expect(shallow(<Notifications />).exists());
    done();
  });

  it('renders three list items', (done) => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('ul')).to.have.lengthOf(1);
    expect(wrapper.find(NotificationItem)).to.have.lengthOf(3);
    done();
  });

  it('renders the right html', (done) => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem).first().html()).to.eq('<li data-notification-type="default">New course available</li>');
    done();
  });

  it('menu item is being displayed when displayDrawer is false', (done) => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.menuItem')).to.have.lengthOf(1);
    done();
  });

  it('Add a check that the div.Notifications is not being displayed when displayDrawer is false', (done) => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.Notifications')).to.have.lengthOf(0);
    done();
  });

  it('Add a check that the menu item is being displayed when displayDrawer is true', (done) => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications')).to.have.lengthOf(1);
    done();
  });

  it('Add a check that the div.Notifications is being displayed when displayDrawer is true', (done) => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    expect(wrapper.find('.Notifications')).to.have.lengthOf(1);
    done();
  });

  it('Add a check that the div.Notifications is being displayed when displayDrawer is true', (done) => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    expect(wrapper.find('.Notifications')).to.have.lengthOf(1);
    done();
  });

  it('Verify that renders correctly if you pass an empty array or if don’t pass the listNotifications', (done) => {
    let wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.find(NotificationItem)).to.have.lengthOf(1);
    wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(NotificationItem)).to.have.lengthOf(1);
    done();
  });

  it('Verify that when you pass a list of notifications, the component renders it correctly and with the right number of NotificationItem', (done) => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}  />);
    expect(wrapper.find(NotificationItem));
    expect(wrapper.find(NotificationItem)).to.have.lengthOf(3);
    done();
  });

  it('Verify that when listNotifications is empty the message "Here is the list of notifications is not displayed", but "No new notification for now" is', (done) => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(NotificationItem).first().html()).to.equal('<li data-notification-type="no-new">No new notification for now</li>');
    done();
});