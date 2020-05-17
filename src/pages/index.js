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
        <div className="columns">
          <div className="column"> </div>
          <div className="column is-half">
          	<Nav />

  	          <h1 className="title"> Hey there, welcome to my website. </h1>

  	          <p>
              My name is Amir. I am an undergraduate at <a href="https://www.uwo.ca/">Western University</a> pursuing a Specialization in Computer Science, with a minor in Software Engineering.

              <br /> <br />

              This past summer I interned at <a href="https://www.td.com/us/en/personal-banking/">TD Bank</a>, working on the Risk Management team, coding automation scripts and performing risk analysis.

              <br /> <br />

              Currently I do software development and business strategy for a startup called deltaStack, which works with businesses and companies to build their software infrastructure.

              <br /> <br />

              I am currently a VP Academic for <a href="https://www.facebook.com/westerncsus/?ref=br_rs">CSUS</a>, where I am managing a portfolio of Academic Directors to create academic themed events and programs to benefit Western Computer Science students.

              <br /> <br />

              In my spare time I like to play piano, swim, work out, and eat shawarma.

              <br /><br />

              I am currently looking for summer opportunities; I love learning, challenging myself, and coding, so <a href="mailto:amir.yalamov@gmail.com">send me a message!</a>

	          </p>
	        </div>
	        <div className="column"></div>
	      </div>
	    </div>
	  </section>
  );
}

export default Index;
