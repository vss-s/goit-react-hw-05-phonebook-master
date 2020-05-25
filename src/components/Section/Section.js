import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import Styles from './Section.module.css';
import slideTransition from '../../Transitions/slideTransition.module.css';

const Section = ({ title = '', isActive = false, children }) => {
  return (
    <CSSTransition
      in={isActive}
      timeout={500}
      classNames={slideTransition}
      mountOnEnter
      unmountOnExit
    >
      <section className={Styles.container}>
        <h1 className={Styles.title}>{title}</h1>
        {children}
      </section>
    </CSSTransition>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  isActive: PropTypes.bool,
};

export default Section;
