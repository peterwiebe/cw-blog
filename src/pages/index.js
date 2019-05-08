import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const { edges } = data.allContentfulBlogPost
  const posts = edges.map(
    ({
      node: {
        id,
        title,
        body: {
          // eslint-disable-next-line no-useless-rename
          childMarkdownRemark: { excerpt: excerpt },
        },
      },
    }) => (
      <div key={id}>
        <h2>{title}</h2>
        <p>{excerpt}</p>
      </div>
    )
  )

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Hi people</h1>
      <p>Welcome to your new Blog.</p>
      {posts}
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  {
    allContentfulBlogPost {
      edges {
        node {
          id
          title
          body {
            childMarkdownRemark {
              excerpt(pruneLength: 400)
            }
          }
        }
      }
    }
  }
`
