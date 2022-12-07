import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import {
//   Link
// } from "react-router-dom";



export default function Navbar(props) {
  return (
    <header className={`d-flex justify-content-center py-3 bg-${props.mode} bavbar-${props.mode}`}>
      <ul className="nav nav-pills">
        <li className="nav-item px-3"><Link to="/Addition" className="nav-link active" aria-current="page">{props.title}</Link></li>
        <li className="nav-item"><Link to="/About" className="nav-link">{props.About}</Link></li>
      </ul>
      <div className="form-check form-switch">
        <input className={`form-check-input text-${props.mode==='light'?'dark':'light'}`} onClick={props.togleMode} type="checkbox" id="flexSwitchCheckDefault" />
        <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">{props.mode==='light'?'Enable':'disable'} darkmode</label>
      </div>
    </header>
  )
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  About: PropTypes.string.isRequired
}
Navbar.defaultProps = {
  title: 'pass title here',
  about: 'About something',
  mode:'white'
}
