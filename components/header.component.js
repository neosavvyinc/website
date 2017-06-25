import React from 'react';
import Link from 'next/link';

export default function({ transparent }) {
  return (
    <nav className="nav" style={transparent ? styles.transparent : {}}>
      {
        transparent ? (
          <style jsx>{`
            .nav-item {
              color: white;
            }
          `}</style>
        ) : null
      }
      <div className="nav-left">
        <div className="nav-item is-brand">
          <Link href="/">
            <img
              src="static/images/assets/logo.png"
              alt="NS"
              style={styles.logo}
            />
              {/*<h4 className="title is-4">Neosavvy</h4>*/}
          </Link>
        </div>
      </div>
      <div className="nav-center">
        <a className="nav-item" href="https://github.com/neosavvyinc">
          <span className="icon">
            <i className="fa fa-github"></i>
          </span>
        </a>
        <a className="nav-item" href="https://medium.com/neosavvy-labs">
          <span className="icon">
            <i className="fa fa-medium"></i>
          </span>
        </a>
        <a className="nav-item" href="https://facebook.com/neosavvy">
          <span className="icon">
            <i className="fa fa-facebook"></i>
          </span>
        </a>
        <a className="nav-item" href="https://twitter.com/neosavvy">
          <span className="icon">
            <i className="fa fa-twitter"></i>
          </span>
        </a>
      </div>

      {/*
       <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
       <!-- You need JavaScript to toggle the "is-active" className on "nav-menu" -->
       */}
       <span className="nav-toggle">
         <span></span>
         <span></span>
         <span></span>
       </span>

       {/*
       <!-- This "nav-menu" is hidden on mobile -->
       <!-- Add the modifier "is-active" to display it on mobile -->
       */}
       <div className="nav-right nav-menu">
         <Link href="/services">
           <a className="nav-item">Services</a>
         </Link>
         <Link href="/about">
           <a className="nav-item">About</a>
         </Link>
         <Link href="/careers">
           <a className="nav-item">Careers</a>
         </Link>
         <Link href="/contact">
           <a className="nav-item">Contact</a>
         </Link>
       </div>
     </nav>
  );
};
 const styles = {
   transparent: {
     position: 'absolute',
     width: '100%',
     background: 'transparent'
   },
   logo: {
     cursor: 'pointer'
   },
 };
