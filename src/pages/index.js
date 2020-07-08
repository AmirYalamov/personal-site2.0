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

  	          <h1 className="title"> Hey there, welcome to my website. </h1>

  	          <p>
              My name is Amir. I am an undergraduate at <a href="https://www.uwo.ca/">Western University</a> pursuing a Specialization in Computer Science with a Minor in Software Engineering.

              <br /> <br />

              Currently I am an MLH Fellow for the <a href="https://fellowship.mlh.io/">Major League Hacking Fellowship</a> program, where I am building computer vision models for <a href="https://alicevision.org/">AliceVision</a>.

              <br /><br />

              In the past I've interned at <a href="https://www.td.com/ca/en/personal-banking/">TD Bank</a> coding automation systems and performing high level tech infrastructure analysis.

              <br /> <br />

              I'm interested in theoretical computer science and <a href="/projects"> building cool products </a>.

              <br /> <br />

              I enjoy playing piano, swimming, and eating shawarma.

                <br /><br />

                <b>🔨 Currently working on:</b><a href="https://github.com/alicevision/AliceVision"> Computer vision software</a>

                <br /><br />

                <b>🤔 Currently learning:</b> <a href="https://www.coursera.org/learn/machine-learning">Machine Learning</a>

                <br /><br />

                <b>📖 Currently reading:</b> <i> <a href="https://www.amazon.ca/Surely-Youre-Joking-Mr-Feynman/dp/0393355624/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1589841281&sr=1-1">Surely You're Joking, Mr. Feynman!</a>, Richard P. Feynman </i>

                <br /><br />

              Always open to opportunities, so <a href="mailto:amir.yalamov@gmail.com">send me a message!</a>

	          </p>

	        </div>
	        <div className="column"></div>

	      </div>
	    </div>
	  </section>
  );
}

export default Index;
