import React, { useState } from 'react';
import { Formik } from 'formik';
import { object, string } from 'yup';
import './style.scss';

const LoginForm = ({ onSubmit, errorMsg }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="loginContainer">
      <div className="heading">Login</div>
      <div className="error-container center">{errorMsg && errorMsg}</div>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={value => onSubmit(value)}
        validationSchema={object().shape({
          email: string()
            .email('Invalid Email')
            .required('Email-Id is required'),
          password: string()
            .min(8, 'minimum 8 chars')
            .required('Password required')
            .matches(
              new RegExp(
                '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
              ),
              'Minimum of one special character, a number, and a capital letter'
            )
        })}
      >
        {({
          values,
          isValid,
          touched,
          errors,
          handleSubmit,
          handleChange,
          handleBlur
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="input-row">
              <div className="label">Email</div>
              <input
                type="text"
                id="email"
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur}
                autoFocus
              />
              <div className="error-container">
                {errors.email && touched.email && errors.email}
              </div>
            </div>
            <div className="input-row">
              <div className="label">Password</div>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                onChange={handleChange}
                value={values.password}
                onBlur={handleBlur}
              />
              <div className="error-container">
                {errors.password && touched.password && errors.password}
              </div>
              <label className="show-password">
                <input
                  type="checkbox"
                  onChange={() => setShowPassword(!showPassword)}
                />
                <span>Show Password</span>
              </label>
            </div>
            <div className="input-row">
              <input
                type="submit"
                className="secondary-btn"
                value="Sign In"
                disabled={!isValid}
              />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
