import React from "react";
import { graphql, Link } from 'gatsby';
import { Helmet } from "react-helmet"
import Nav from '../components/Nav';
import Tag from '../components/Tag';
import Img from "gatsby-image";

const Blog = ({data}) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <section className="section" style={{"paddingTop": "1rem"}}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog</title>
      </Helmet>

      <div className="container">
      <Nav />
        <div className="columns">
          <div className="column"> </div>
          <div className="column is-two-fifths">

            <h1 className="title"> Blog </h1>
            <p>My thoughts on certain topics, nothing too serious.
            </p>
            <p>
              <br />

              {edges.map(edge => {

                const {frontmatter} = edge.node;
                const featuredImgFluid = frontmatter.image.childImageSharp.fluid
                return (


                  <div class="box">
                    <article class="media">
                      <div class="media-left" style={{"paddingTop": "1rem"}}>
                        <figure class="image is-64x64">
                        <Img fluid={featuredImgFluid} />
                        </figure>
                      </div>
                      <div class="media-content">
                        <div class="content">
                          <p>
                          <span style={{fontSize: "0.75rem"}}>{frontmatter.date} </span> <br />
                            <Link to={frontmatter.path}>
                            <p>{frontmatter.title}</p>
                            </Link>

                            <p style={{fontSize: "0.85rem", marginBottom: "0.5rem", marginTop: "0.1rem"}}>{frontmatter.excerpt}</p>
                          </p>
                        </div>
                        <nav class="level is-mobile">
                          <div class="level-left">

                          </div>
                        </nav>
                      </div>
                    </article>
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
  query blogQuery {
    allMarkdownRemark (
      sort: {order: DESC, fields: [frontmatter___date]}
      filter: {frontmatter: {tag: {eq: "blog"}}}
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

export default Blog;
