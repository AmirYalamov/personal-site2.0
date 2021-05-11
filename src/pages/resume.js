import React from 'react'
import { Helmet } from "react-helmet"
import Nav from '../components/Nav'

const Index = () => {
  return (
	  <section className="section" style={{"paddingTop": "1rem"}}>
		    <Helmet>
          <meta charSet="utf-8" />
          <title>Amir Yalamov</title>
        </Helmet>

	    <div className="container">
        <Nav />
        <div className="columns">
          <div className="column"> </div>
          <div className="column is-half">


  	          <p>
              Please email at <a href="mailto:amir.yalamov@gmail.com">amir.yalamov@gmail.com</a> for the most recent version of my resume.

	          </p>

	        </div>
	        <div className="column"></div>

	      </div>
	    </div>
	  </section>
  );
}

export default Index;
