import React from 'react';
import { Link } from "gatsby";
import gray from 'gray-percentage';

export default function Header(props) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '240px',
      }}
      >
      <h1 style={{ fontSize: '14px', paddingBottom: '2px' }}>
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
          >
          {props.title}
        </Link>
      </h1>
      <div style={{ color: gray(80) }}>work in progress.</div>
      <div>-</div>
    </div>
  );
}
