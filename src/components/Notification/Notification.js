import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Notification.module.css';
import { CSSTransition } from 'react-transition-group';
import notificationTransition from '../../Transitions/notificationTransition.module.css';

const Notification = ({ message, isActive = false }) => (
  <CSSTransition
    in={isActive}
    classNames={notificationTransition}
    className={Styles.container}
    timeout={250}
    mountOnEnter
    unmountOnExit
  >
    <div>{message}</div>
  </CSSTransition>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};

export default Notification;
