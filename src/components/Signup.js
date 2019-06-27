import React from 'react';

import './Signup.css';

class Signup extends React.Component {
  render() {
    
    return (
      <form
        action="https://app.convertkit.com/forms/980300/subscriptions" className="seva-form formkit-form" method="post"
        data-sv-form="980300"
        data-uid="c19c3b84c2"
        data-format="inline"
        data-version="5"
        data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Success! Now check your email to confirm your subscription.&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;modal&quot;:{&quot;trigger&quot;:null,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:null,&quot;devices&quot;:null,&quot;show_once_every&quot;:null},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:null,&quot;trigger&quot;:null,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:null,&quot;devices&quot;:null,&quot;show_once_every&quot;:null}}}"
        style={{ backgroundColor: 'rgb(255, 255, 255)', borderRadius: '6px'}}>
        <div data-style="full">
          <div data-element="column" className="formkit-column">
            <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
            <div data-element="fields" className="seva-fields formkit-fields">
              <div className="formkit-field"><input className="formkit-input" aria-label="First name" name="fields[first_name]"
                                                placeholder="First name" type="text"
                                                    style={{ borderColor: 'rgb(227, 227, 227)', borderRadius: '2px', color: 'rgb(0, 0, 0)', fontWeight: 400,}}/></div>
              <div className="formkit-field"><input className="formkit-input" name="email_address" placeholder="Your email address"
                                                required="" type="email"
                                                    style={{borderColor: 'rgb(227, 227, 227)', borderRadius: '2px', color: 'rgb(0, 0, 0)', fontWeight: 400 }}/></div>
              <button data-element="submit" className="formkit-submit formkit-submit"
                      style={{backgroundColor: 'rgb(255, 90, 90)', borderRadius: '2px', color: 'rgb(255, 255, 255)', fontWeight: 700}}>
                <div className="formkit-spinner">
                  <div></div>
                  <div></div>
                  <div></div>
                </div><span>Submit</span>
              </button>
            </div>
            <div className="formkit-guarantee" data-element="guarantee"
                 style={{color: 'rgb(77, 77, 77)', fontSize: '13px', fontWeight: 400}}>
              <p>We won't send you spam. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Signup;
