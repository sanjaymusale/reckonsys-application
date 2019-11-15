import React from 'react';
import { Formik } from 'formik';
import { object, string } from 'yup';

const Form = ({ data, onSubmit }) => {
  return (
    <Formik
      initialValues={{
        name: (data && data.name) || '',
        section1: data && data.sections.length ? data.sections[0] : '',
        section2: data && data.sections.length ? data.sections[1] : '',
        section3: data && data.sections.length ? data.sections[2] : '',
        section4: data && data.sections.length ? data.sections[3] : '',
        joinDate: (data && data.join_date) || '',
        status: (data && data.status) || ''
      }}
      onSubmit={value => onSubmit(value)}
      validationSchema={object().shape({
        name: string().required('Name is Required'),
        section1: string()
          .required('1st is Required')
          .matches(/^[0-9]*$/, 'Only Integer value'),
        section2: string()
          .required('2nd is Required')
          .matches(/^[0-9]*$/, 'Only Integer value'),
        section3: string()
          .required('3rd is Required')
          .matches(/^[0-9]*$/, 'Only Integer value'),
        section4: string()
          .required('4th is Required')
          .matches(/^[0-9]*$/, 'Only Integer value'),
        joinDate: string().required('Joining date required'),
        status: string().required('Select the Status')
      })}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="input-row">
            <div className="label">Name</div>
            <input
              id="name"
              type="text"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="error-container">
              {errors.name && touched.name && errors.name}
            </div>
          </div>
          <div className="input-row">
            <div className="label">Sections</div>
            <div className="input-row row section">
              <input
                id="section1"
                type="text"
                value={values.section1}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="1st"
              />
              &nbsp;
              <input
                id="section2"
                type="text"
                value={values.section2}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="2nd"
              />
              <input
                id="section3"
                type="text"
                value={values.section3}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="3rd"
              />
              &nbsp;
              <input
                id="section4"
                type="text"
                value={values.section4}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="4th"
              />
            </div>
            <div className="error-container">
              {errors.section1 && touched.section1 && errors.section1}
              {` `}
              {errors.section2 && touched.section2 && errors.section2}
              {` `}
              {errors.section3 && touched.section3 && errors.section3}
              {` `}
              {errors.section4 && touched.section4 && errors.section4}
            </div>
          </div>
          <div className="input-row">
            <div className="label">Join Date</div>
            <input
              id="joinDate"
              type="text"
              value={values.joinDate}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="error-container">
              {errors.joinDate && touched.joinDate && errors.joinDate}
            </div>
          </div>

          <div className="input-row row">
            <div>Status :</div>&nbsp;&nbsp;
            <select
              id="status"
              onChange={handleChange}
              defaultValue={values.status}
              onBlur={handleBlur}
            >
              <option value="">Select Status</option>
              <option value="active">Active</option>
              <option value="inactive">InActive</option>
            </select>
          </div>
          <div className="error-container">
            {errors.status && touched.status && errors.status}
          </div>
          <br />
          <div className="input-row">
            <input type="submit" className="secondary-btn" value="Submit" />
          </div>
        </form>
      )}
    </Formik>
  );
};

export default Form;
