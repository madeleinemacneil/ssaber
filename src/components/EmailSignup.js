import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function EmailSignup(props) {
  return (
    <React.Fragment>
      <div style={{ paddingBottom: '5px' }}>Join the newsletter (no spam)</div>
      <Formik
        initialValues={{ email: '' }}
        validate={values => {
          let errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        >
        {({ isSubmitting }) => (
          <Form
            style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
            action="https://app.convertkit.com/forms/980300/subscriptions"
            method="post"
            >
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
              <Field placeholder="your@email.com" type="email" name="email" style={{ minWidth: '220px', marginRight: '10px' }} />
              <ErrorMessage name="email" component="div" style={{ fontSize: '12px', color: '#FF5A5A', marginTop: '6px' }} />
            </div>
            <button data-element="submit" type="submit" disabled={isSubmitting} style={{ maxWidth: '120px' }}>
              Submit
            </button>
          </Form>
        )}
    </Formik>
      </React.Fragment>
  );
}
