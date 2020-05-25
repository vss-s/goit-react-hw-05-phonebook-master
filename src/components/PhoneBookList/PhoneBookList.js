import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Icon } from '@iconify/react';
import xIcon from '@iconify/icons-cil/x';
import Styles from './PhoneBookList.module.css';
import transitionsStyle from '../../Transitions/slideTransition.module.css';

const PhoneBookList = ({ onDelete, contacts }) => (
  <TransitionGroup component="ul" className={Styles.container}>
    {contacts.map(({ id, name, number }) => (
      <CSSTransition
        in
        timeout={250}
        classNames={transitionsStyle}
        className={Styles.listItem}
        key={id}
        unmountOnExit
      >
        <li>
          <span className={Styles.name}>
            {name} : {number}
          </span>
          <button
            onClick={() => onDelete(id)}
            className={Styles.Btn}
            type="button"
          >
            <Icon icon={xIcon} color="red" width="40px" height="40px" />
          </button>
        </li>
      </CSSTransition>
    ))}
  </TransitionGroup>
);

PhoneBookList.propTypes = {
  onDelete: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string,
    }),
  ),
};

export default PhoneBookList;
