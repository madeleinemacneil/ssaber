import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { rhythm, scale } from "../utils/typography";

const GITHUB_USERNAME = 'kinney';
const GITHUB_REPO_NAME = 'ssaber';

class PostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next, slug } = this.props.pageContext;

    const discussUrl = `https://mobile.twitter.com/search?q=${encodeURIComponent(
      `https://ssaber.com${slug}`
    )}`;
    const editUrl = `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}/edit/master/src/content/${slug.slice(
      1,
      slug.length - 1
    )}/index.md`;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.metaTitle || post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <h1
          style={{
            marginBottom: 0,
          }}
        >
          {post.frontmatter.title}
        </h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
          }}
        >
          {post.frontmatter.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <a style={{ marginRight: '10px' }} href={discussUrl} target="_blank" rel="noopener noreferrer">
          Discuss on Twitter
        </a>
        /
        <a style={{ marginLeft: '10px' }} href={editUrl} target="_blank" rel="noopener noreferrer">
          Edit on GitHub
        </a>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    );
  }
}

export default PostTemplate;

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        metaTitle
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
