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
              My name is Amir. I recently graduated from <a href="https://www.uwo.ca/">Western University</a> with an Honours degree in Computer Science. I'm currently working as a backend developer for <a href="https://www.shopify.ca/">Shopify</a> on the Marketing Automations team.

              <br /> <br />

              The summer of 2020 I was a Software Engineering Fellow for the <a href="https://fellowship.mlh.io/">Major League Hacking Fellowship</a>, where I worked on a <a href="https://github.com/alicevision/AliceVision/pull/836">feature matching algorithm</a> for <a href="https://github.com/alicevision/AliceVision">open source computer vision software</a>.

              <br /><br />

              In the past I've interned at <a href="https://www.td.com/ca/en/personal-banking/">TD Bank</a> coding automation systems and performing high level tech infrastructure analysis.

              <br /> <br />

              I'm interested in theoretical computer science and <a href="/projects"> building cool products </a>.

              <br /> <br />

              I enjoy playing piano, swimming, and eating shawarma.

                <br /><br />

                <b>🔨 Currently working on:</b> finding a desk plant 🌱

                <br /><br />

                <b>🤔 Currently learning:</b> <a href="https://rubyonrails.org/">Ruby on Rails</a> (among lots of other things at work!)

                <br /><br />

                <b>📖 Currently reading:</b> <i> <a href="https://www.calnewport.com/books/deep-work/">Deep Work</a>, Cal Newport</i>

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
