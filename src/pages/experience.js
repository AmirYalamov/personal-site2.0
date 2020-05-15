import React from "react";
import { graphql, Link } from 'gatsby';
import { Helmet } from "react-helmet"
import Nav from '../components/Nav';
import Tag from '../components/Tag';

const Experience = ({data}) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <section className="section" style={{"paddingTop": "1rem"}}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Experience</title>
      </Helmet>

      <div className="container">
        <div className="columns">
          <div className="column"> </div>
          <div className="column is-half">
            <Nav />

            <h1 className="title"> Experience </h1>
            <p>My project interests include back end development, system tools, and application of cool APIs. Here I can write a bit more about them and how they came about.</p>
            <p>
              <br />

              {edges.map(edge => {

                const {frontmatter} = edge.node;
                return (

                  <div className="box"
                    key={frontmatter.path} style={{color: "black", marginBottom: "1rem"}}>
                    <span style={{fontSize: "0.75rem"}}>
                    {frontmatter.date}
                    </span>
                    <br />
                    <Link to={frontmatter.path}>
                    <p>{frontmatter.title}</p>
                    </Link>

                    <p style={{fontSize: "0.85rem", marginBottom: "0.5rem", marginTop: "0.1rem"}}>{frontmatter.excerpt}</p>

                  </div>
                )
              })}
            </p>

          </div>
          <div className="column"></div>
        </div>
      </div>
    </section>
  )
};

export const query = graphql`
  query experienceQuery {
    allMarkdownRemark (
      sort: {order: DESC, fields: [frontmatter___date]}
      filter: {frontmatter: {tag: {eq: "experience"}}}
    ) {
      edges {
        node {
          frontmatter {
            title
            excerpt
            path
            date
            tag
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Experience;
