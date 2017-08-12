import React from 'react';
import Link from 'next/link';

const orange = '#E2632A';
const white = 'white';

export default function({ transparent, hideLogo }) {
  const styles = createStyles(transparent);
  return (
    <nav className="nav" style={styles.container}>
      {
        !hideLogo ?
          <div className="nav-left">
            <div className="nav-item is-brand" style={styles.text}>
              <Link prefetch href="/">
                <img
                  src={`/static/images/assets/logo-${transparent ? 'white' : 'orange'}.png`}
                  alt="NS"
                  style={styles.logo}
                />
              </Link>
            </div>
          </div> : null
      }
      <div className="nav-center">
        <a className="nav-item" href="https://github.com/neosavvyinc" style={styles.text}>
          <span className="icon">
            <i className="fa fa-github"></i>
          </span>
        </a>
        <a className="nav-item" href="https://medium.com/neosavvy-labs" style={styles.text}>
          <span className="icon">
            <i className="fa fa-medium"></i>
          </span>
        </a>
        <a className="nav-item" href="https://facebook.com/neosavvy" style={styles.text}>
          <span className="icon">
            <i className="fa fa-facebook"></i>
          </span>
        </a>
        <a className="nav-item" href="https://twitter.com/neosavvy" style={styles.text}>
          <span className="icon">
            <i className="fa fa-twitter"></i>
          </span>
        </a>
      </div>

      <span className="nav-toggle" style={styles.text} />
      <div className="nav-right nav-menu" />
    </nav>
  );
};
const createStyles = (transparent) => {
  const mainColor = transparent ? white : orange;
  return {
    container: {
      position: 'absolute',
      width: '100%',
      background: 'transparent',
    },
    text: {
      color: mainColor
    },
    button: {
      color: mainColor,
      background: 'transparent',
      border: `1px solid ${mainColor}`
    },
    logo: {
      cursor: 'pointer'
    },
  };
};
