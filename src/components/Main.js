import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Me</h2>
          {/* <span className="image main">
            <img src={pic01} alt="" />
          </span> */}
          <p>
          I’m a Computer Science major by day, an Athlete by evening, a functional wantrepreneur by midnight and a hustler always.<br/><br/>
          I'm truly an enthusiast about Technology, Open Source, Stock Market and Fitness. <br/><br/>
          If you can't find me, it's because I'm already coding, off to a hike, or studying for an exam.
          <br/><br/>Currently seeking co-op opportunities to apply existing skills and learn new technologies
          <br/><br/><b>Find me on:</b>
          <br/><br/>
          <ul className="icons">
          <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/sidharthmiglani"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/sid_miglani"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/sidharth-miglani/" className="icon fa-linkedin">
                <span className="label">Facebook</span>
              </a>
            </li>
          
            
          </ul>

          </p>
          
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            {/* <img src={pic02} alt="" /> */}
          </span>
          <p>
            Currently seeking co-op oppurtunities in computer science to apply existing skills

          </p>
          <p>
            <li>Previously worked at <a a target="_blank" rel="noreferrer" href="http://www.glentel.com/home">Glentel</a> as <b>Network Administrator intern</b> (08/2019 - 04/2020)</li>
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          {/* <span className="image main">
            <img src={pic03} alt="" />
          </span> */}
          <p>
            Worked on projects, both individual and in collaboration with teams to explore new technologies and apply them to build meaningful applications. 
            <br></br><br></br>
            Code for all projects can be found <b><a target="_blank" rel="noreferrer" href="https://github.com/sidharthmiglani">here</a></b>
            <br/><br/> Recent projects:<br/><br/>
            >> &nbsp; <b><i><a target="_blank" rel="noreferrer" href="https://github.com/sidharthmiglani">Polyglot (Web)</a> :</i></b>&nbsp; A single system that uses multiple languages to do it's work. Independently designed and built a web-based system that establishes
            connection b/w it's client and server via REST api to exchange data. Calculation on the server is then carried out concurrently in Golang using a foreign function interface.
            <br/><br/>Implemented frontend with <b>React</b>, Server in <b>Python Django</b> and utilized <b>ctypes</b> python library to establish cross language communication.
            <br/><br/>
            >> &nbsp; <b><i><a target="_blank" rel="noreferrer" href="https://github.com/sidharthmiglani/Workout-Tracker">Workout Tracker (Web)</a>:</i></b> A full stack web application that lets users sign up and track their workouts. Built using React, Express.js, Node.js, MongoDB.
            <br/><br/>
            >> &nbsp; <b><i>Tic-Tac-Toe Game agent (AI):</i> </b>
            <br/><br/>
            >> &nbsp; <b><i>S-talk chat app (Software)</i> </b>
            <br/><br/> 
            >> &nbsp; <b><i> Portfolio (This website):</i>  </b> Built with GatsbyJS, a static progressive web app framework based on React. Deployed and hosted on Netlify.
          </p>
          {/* <a
                target="_blank"
                
                href="https://github.com/sidharthmiglani"
                className="icon fa-github"
              ></a> */}
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <p><b> Alternatively, email me at &nbsp;&nbsp;>> &nbsp;<a target="_blank" rel="noreferrer" href = "mailto: smiglani@sfu.ca">smiglani@sfu.ca</a></b>
            
          </p>
        
          <ul className="icons">
            <li>
              <a
                target="_blank" 
                rel="noreferrer"
                href="https://twitter.com/sid_miglani"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            {/* <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li> */}
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sidharth-miglani/" className="icon fa-linkedin">
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a
                target="_blank" 
                rel="noreferrer"
                href="https://github.com/sidharthmiglani"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
