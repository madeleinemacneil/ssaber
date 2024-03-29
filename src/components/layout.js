import React from "react";
import { Link } from 'gatsby';

import Header from './Header';
import EmailSignup from './EmailSignup';

import { rhythm } from "../utils/typography";
import logo from '../../content/assets/ssaber-half.png';

export default class Layout extends React.Component {
  render() {
    const { title, children } = this.props;
    return (
      <div>
        <div style={{ backgroundColor: '#000', height: '10px' }} />
        <Link to='/'>
          <img
            src={logo}
            alt="logo"
            style={{ height: 45, width: 45, position: 'absolute', right: 0, top: '10px' }}
          />
        </Link>
        <div
          style={{
            width: '100%',
            padding: rhythm(1),
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}
          >
          <div
            style={{
              display: 'flex',
              maxWidth: rhythm(24),
              paddingRight: `${rhythm(1)}`,
              minHeight: `calc(100vh - 10px - ${rhythm(1)} - ${rhythm(1)})`,
            }}>
            <main>{children}</main>
          </div>
          <Header title={title} />
        </div>
        <footer
          style={{
            backgroundColor: '#f7f7f7',
            padding: `${rhythm(2)} ${rhythm(1)}`,
          }}
          >
          <EmailSignup />
        </footer>
      </div>
    );
  }
}
