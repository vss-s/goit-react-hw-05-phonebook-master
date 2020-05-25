import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import apearTransition from '../../Transitions/apearTransition.module.css';
import Styles from './PhoneBookSearchField.module.css';

const PhoneBookSearchField = ({ value, onChange, isActive = false }) => (
  <CSSTransition
    in={isActive}
    mountOnEnter
    unmountOnExit
    timeout={250}
    classNames={apearTransition}
  >
    <div className={Styles.container}>
      <input
        className={Styles.searchField}
        type="text"
        name="filterQuery"
        value={value}
        onChange={onChange}
        placeholder="Search contact..."
      />
    </div>
  </CSSTransition>
);

PhoneBookSearchField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
};

export default PhoneBookSearchField;
