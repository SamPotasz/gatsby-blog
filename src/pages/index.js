import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.span`
  margin-bottom: 20px;
  font-size: 2em;
  color: plum;
`

export default ({ data }) => {
  console.log(data);
  return (<Layout>
    <SEO title="Home" />
    <div>
      <h1>Blorg Time</h1>
      {
        data.allMarkdownRemark.edges.map( ({node}) => (
          <div key = {node.id}>
            <BlogLink to={ node.fields.slug }>
              <BlogTitle>{ node.frontmatter.title } - { node.frontmatter.date }</BlogTitle>
              <p>{ node.excerpt }</p>
            </BlogLink>
          </div>
        ))
      }
    </div>
  </Layout>)
}

export const query = graphql`
query {
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          date
          description
          title
        }
        fields {
          slug
        }
        html
        excerpt
      }
    }
  }
}
`