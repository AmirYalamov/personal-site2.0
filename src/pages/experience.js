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

			<h1 class="title"> Experience </h1>
	          <p>
	            In my first year at university I wanted to get involved in the CS community at Western.
              <br /><br />
              As the first year rep, I acted as the liaison between the club and all the first year students. I was also part of the sub-committee that rewrote the organization's constitution, in order to establish a framework for success and growth for the club's future.
	          </p>

            </div>
	        <div className="column"></div>
	      </div>
	    </div>
	  </section>
  );
}

export default Experience;
