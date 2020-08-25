import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from "react-helmet"

require(`katex/dist/katex.min.css`)
require("../styles/prism-base16-ateliersulphurpool.light.css")

const Template = ({data}) => {
  const {markdownRemark} = data
  const html = markdownRemark.html
  const date = markdownRemark.frontmatter.date
  const tags = markdownRemark.frontmatter.tags
  const title = markdownRemark.frontmatter.title

  return (
    <section>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>

      <div className="container">
        <div className="columns">
          <div className="column" />
          <div className="column is-half" style={{padding: "2rem"}}>
            <br />
            <div className="generated">


              <p className="is-size-7" style={{marginBottom: "0.5rem"}}>Last Edit: {date}</p>
              <div style={{marginTop: "1rem"}} dangerouslySetInnerHTML={{__html: html}}/>
            </div>
            <hr style={{marginTop: "2.5rem"}}/>
            <div className="level">

            <a href="javascript:history.back()"><button class="button is-outlined"><span class="icon">
            <i class="fas fa-reply"></i>
            </span>
            <span>Go Back</span>
            </button></a>
            </div>
          </div>
          <div className="column" />
        </div>
      </div>
    </section>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: {eq: $pathSlug }}) {
      rawMarkdownBody
      html
      frontmatter {
        title
        date
      }
    }
  }
`

export default Template;
