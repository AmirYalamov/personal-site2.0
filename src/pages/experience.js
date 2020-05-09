import React from 'react'
import { Helmet } from "react-helmet"
import Nav from '../components/Nav'

const Experience = () => {
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

			<h1 class="title"> experience </h1>
	          <p>
	            lorum ipsum
	          </p>
            </div>
	        <div className="column"></div>
	      </div>
	    </div>
	  </section>
  );
}

export default Experience;
