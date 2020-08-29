import PropTypes from 'prop-types'
import React from 'react'
import me2 from '../images/me2.jpg'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span> <img className="logo" src={me2}/> </span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Hello! I'm Sid</h1>
        <p>
          <h3>
            <b>
              4th year Computer Science student @Simon Fraser University <br/><br/> 
              Passionate about Full stack applications, Machine Learning, Server programming, and Fitness
            </b>
          </h3>
          {/* <a href="https://html5up.net">HTML5 UP</a> and released
          <br />
          for free under the{' '}
          <a href="https://html5up.net/license">Creative Commons</a> license. */}
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            <b>About Me</b>
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            <b>CV</b>
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            <b>Projects</b>
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            <b>Contact</b>
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
