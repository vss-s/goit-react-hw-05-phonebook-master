import React from 'react';
import PropTypes from 'prop-types';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { CSSTransition } from 'react-transition-group';
import slideTransition from '../../Transitions/slideTransition.module.css';
import Styles from './PhoneBookFields.module.css';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .min(2, 'Must be 2 characters or more')
    .required('Required'),
  number: Yup.string()
    .matches(
      /^(\()?\d{3}(\))?(-|\s)?\d{2}(-|\s)\d{2}$/,
      'Telephone number should be like: 000-00-00',
    )
    .required('Required'),
});

const PhoneBookFields = ({ onSubmit }) => (
  <>
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={(values, actions) => {
        onSubmit(values) && actions.resetForm();
      }}
      validationSchema={validationSchema}
    >
      {props => {
        const { values, touched, errors, handleChange, handleBlur } = props;
        return (
          <Form className={Styles.container}>
            <label className={Styles.inputLabel} htmlFor="name">
              Name
            </label>

            <CSSTransition
              in={errors.name && touched.name}
              classNames={slideTransition}
              timeout={250}
              mountOnEnter
              unmountOnExit
            >
              <div className={Styles.invalidMessage}>{errors.name}</div>
            </CSSTransition>

            <Field
              className={
                errors.name && touched.name
                  ? Styles.inputFieldError
                  : Styles.inputField
              }
              type="text"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              name="name"
              placeholder="Put contact name"
            />

            <label className={Styles.inputLabel} htmlFor="number">
              Number
            </label>

            {
              <CSSTransition
                in={errors.number && touched.number}
                classNames={slideTransition}
                timeout={250}
                mountOnEnter
                unmountOnExit
              >
                <div className={Styles.invalidMessage}>{errors.number}</div>
              </CSSTransition>
            }

            <Field
              className={
                errors.number && touched.number
                  ? Styles.inputFieldError
                  : Styles.inputField
              }
              value={values.number}
              onChange={handleChange}
              onBlur={handleBlur}
              type="tel"
              name="number"
              placeholder="000-00-00"
            />
            <button type="submit" className={Styles.Btn}>
              Add Contact
            </button>
          </Form>
        );
      }}
    </Formik>
  </>
);

PhoneBookFields.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default PhoneBookFields;
