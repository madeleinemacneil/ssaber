import React from 'react';
import { navigate } from 'gatsby';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const MailchimpResponse = {
  SUCCESS: 'success',
  ERROR: 'error',
};

export default class EmailSignup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(values, { setSubmitting }) {
    const res = await addToMailchimp(values.email);

    if (res.result === MailchimpResponse.ERROR) {
      this.setState({ error: 'You\'re already subscribed to this list' });
      return;
    }

    setSubmitting(false);
    navigate('/thanks');

  }

  render() {
    const { error } = this.state;
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
          onSubmit={this.handleSubmit}
          >
          {({ isSubmitting }) => (
            <Form style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
                <Field placeholder="your@email.com" type="email" name="email" style={{ minWidth: '220px', marginRight: '10px' }} />
                {error ?
                  <div style={{ fontSize: '12px', color: '#FF5A5A', marginTop: '6px' }}>{error}</div> :
                  <ErrorMessage name="email" component="div" style={{ fontSize: '12px', color: '#FF5A5A', marginTop: '6px' }} />
                }
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
}
