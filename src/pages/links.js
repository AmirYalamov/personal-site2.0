import React from 'react'
import { Helmet } from "react-helmet"
import Nav from '../components/Nav'

const Links = () => {
  return (
	  <section className="section" style={{"paddingTop": "1rem"}}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Links</title>
      </Helmet>

	    <div className="container">
        <div className="columns">
          <div className="column"> </div>
          <div className="column is-half">
          	<Nav />

			<h1 class="title"> Links </h1>
	          <p>

            <a href="https://github.com/AmirYalamov"><button class="button is-white"><span class="icon">
            <i class="fab fa-github"></i>
            </span>
            <span>GitHub</span>
            </button></a>

            <br /><br />

            <a href="https://www.linkedin.com/in/amiryalamov/"><button class="button is-white"> <span class="icon">
            <i class="fab fa-linkedin"></i>
            </span>
            <span>Linkedin</span>
            </button></a>

            <br /><br />

            <a href="/resume.pdf"><button class="button is-white"> <span class="icon">
            <i class="far fa-file"></i>
            </span>
            <span>Résumé</span>
            </button></a>

            <br /><br />

            <a href="mailto:amir.yalamov@gmail.com"><button class="button is-white"><span class="icon">
            <i class="far fa-envelope"></i>
            </span>
            <span>Email</span>
            </button></a>
	          </p>
            </div>
	        <div className="column"></div>
	      </div>
	    </div>
	  </section>
  );
}

export default Links;
