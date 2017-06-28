import React from 'react';
import Scroll from 'react-scroll';
import Link from 'next/link';

export default function({ transparent }) {
  return (
    <nav className="nav" style={transparent ? styles.transparent.container : styles.default.container}>
      <div className="nav-left">
        <div className="nav-item is-brand" style={styles.transparent.text}>
          <Link prefetch href="/">
            <img
              src="static/images/assets/logo-white.png"
              alt="NS"
              style={styles.logo}
            />
          </Link>
        </div>
      </div>
      <div className="nav-center">
        <a className="nav-item" href="https://github.com/neosavvyinc" style={styles.transparent.text}>
          <span className="icon">
            <i className="fa fa-github"></i>
          </span>
        </a>
        <a className="nav-item" href="https://medium.com/neosavvy-labs" style={styles.transparent.text}>
          <span className="icon">
            <i className="fa fa-medium"></i>
          </span>
        </a>
        <a className="nav-item" href="https://facebook.com/neosavvy" style={styles.transparent.text}>
          <span className="icon">
            <i className="fa fa-facebook"></i>
          </span>
        </a>
        <a className="nav-item" href="https://twitter.com/neosavvy" style={styles.transparent.text}>
          <span className="icon">
            <i className="fa fa-twitter"></i>
          </span>
        </a>
      </div>

      {/*
       <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
       <!-- You need JavaScript to toggle the "is-active" className on "nav-menu" -->
       */}
       <span className="nav-toggle" style={styles.transparent.text}>
         {/*
         <span></span>
         <span></span>
         <span></span>
         */}
       </span>

       {/*
       <!-- This "nav-menu" is hidden on mobile -->
       <!-- Add the modifier "is-active" to display it on mobile -->
         <Link prefetch href="/services">
           <a className="nav-item" style={styles.transparent.text}>Services</a>
         </Link>
         <Link prefetch  href="/about">
           <a className="nav-item" style={styles.transparent.text}>About</a>
         </Link>
         <Link prefetch href="/careers">
           <a className="nav-item" style={styles.transparent.text}>Careers</a>
         </Link>
       */}
       <div className="nav-right nav-menu">
         {/*
         <div className="nav-item">
           <a className="button" style={styles.transparent.button}>
             <span style={styles.transparent.text}>CONTACT</span>
           </a>
         </div>
         */}
       </div>
     </nav>
  );
};
const styles = {
  default: {},
  transparent: {
    container: {
      position: 'absolute',
      width: '100%',
      background: 'transparent',
    },
    text: {
      color: 'white'
    },
    button: {
      color: 'white',
      background: 'transparent',
      border: '1px solid white'
    }
  },
  logo: {
    cursor: 'pointer'
  },
};
