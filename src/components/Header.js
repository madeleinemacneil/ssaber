import React from 'react';
import { Link } from "gatsby";
import gray from 'gray-percentage';
import styled from 'styled-components';

export default function Header(props) {
  return (
    <Container>
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
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  flex-direction: column;
  width: 240px;
`;
