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
              My name is Amir. I am a 4th year undergraduate at <a href="https://www.uwo.ca/">Western University</a> pursuing an Honours degree in Computer Science.

              <br /> <br />

              This past summer I was a Software Engineering Fellow for the <a href="https://fellowship.mlh.io/">Major League Hacking Fellowship</a>, where I worked on a <a href="https://github.com/alicevision/AliceVision/pull/836">feature matching algorithm</a> for <a href="https://github.com/alicevision/AliceVision">open source computer vision software</a>.

              <br /><br />

              In the past I've interned at <a href="https://www.td.com/ca/en/personal-banking/">TD Bank</a> coding automation systems and performing high level tech infrastructure analysis.

              <br /> <br />

              I'm interested in theoretical computer science and <a href="/projects"> building cool products </a>.

              <br /> <br />

              I enjoy playing piano, swimming, and eating shawarma.

                <br /><br />

                <b>🔨 Currently working on:</b> Finding a thesis topic

                <br /><br />

                <b>🤔 Currently learning:</b> <a href="https://en.wikipedia.org/wiki/Human%E2%80%93computer_interaction">Human Computer Interaction</a>

                <br /><br />

                <b>📖 Currently reading:</b> <i> <a href="https://www.amazon.ca/Brief-History-Time-Stephen-Hawking/dp/0553380168/ref=pd_lutyp_qpp_14_5_2/141-2244380-9779762?_encoding=UTF8&pd_rd_i=0553380168&pd_rd_r=658d2d64-8226-4305-ae28-86395957a6ed&pd_rd_w=GibDd&pd_rd_wg=kjxnt&psc=1&refRID=J5D4R3NVXZA8Z76724DX">A Brief History of Time</a>, Stephen Hawking</i>

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
