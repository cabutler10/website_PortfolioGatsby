import React from "react";
import { graphql } from "gatsby";
import Layout from "./layout";

export default ({ children }) => {
  return <Layout>{children}</Layout>;
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      id
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`;
