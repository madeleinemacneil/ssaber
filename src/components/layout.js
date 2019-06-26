import React from "react";
import styled from 'styled-components';

import Header from './Header';

import { rhythm } from "../utils/typography";

export default class Layout extends React.Component {
  render() {
    const { title, children } = this.props;
    return (
      <div>
        <div style={{ backgroundColor: '#000', height: '10px' }} />
        <Container>
          <div
            style={{
              display: 'flex',
              maxWidth: rhythm(24),
              paddingRight: `${rhythm(1)}`,
            }}>
            <main>{children}</main>
          </div>
          <Header title={title} />
        </Container>
        <footer></footer>
      </div>
    );
  }
}

const Container = styled.div`
  width: 100%;
  padding: ${rhythm(1)};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
