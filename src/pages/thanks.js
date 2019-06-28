import React from "react";
import { Link } from 'gatsby';
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/Seo";

export default class Thanks extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Thanks!" />
        <h1>Success!</h1>
        <p>Thanks for signing up. You should have an email waiting for you.</p>
        <Link to='/'>
          <button>Home</button>
        </Link>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
