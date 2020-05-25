import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import logoTransition from '../../Transitions/logoTransition.module.css';
import Styles from './PhoneBookLogo.module.css';

export default class PhoneBookLogo extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  state = {
    isActive: false,
  };

  componentDidMount() {
    setTimeout(() => this.setState({ isActive: true }), 300);
  }

  render() {
    const { isActive } = this.state;
    const { title } = this.props;
    return (
      <CSSTransition in={isActive} classNames={logoTransition} timeout={500}>
        <div className={Styles.logo}>{title}</div>
      </CSSTransition>
    );
  }
}
