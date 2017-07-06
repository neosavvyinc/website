import _ from 'lodash';
import Link from 'next/link';
import sizeMe from 'react-sizeme';

const Footer = ({ size }) => {
  const isMobile = size.width < 768;
  const styles = createStyles(isMobile);

  return (
    <footer className="footer" style={styles.footer}>
      <div className="columns">
        <div className="column is-half">
          {/*<iframe id="googlemap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6297769246025!2d-73.98654188404852!3d40.74817127932809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9ca6ada41%3A0xdc1a43cb9846b80a!2s349+5th+Ave%2C+New+York%2C+NY+10016!5e0!3m2!1sen!2sus!4v1462211604338" frameborder="0" style={styles.map} allowfullscreen="" />*/}
        </div>
        <div className="column is-3" style={styles.alignCenter}>
          <div style={styles.socialContainer}>
            <a style={styles.socialLink} href="https://www.twitter.com/neosavvy">
              <span className="icon">
                <i className="fa fa-twitter"></i>
              </span>
              <span>Twitter</span>
            </a>
          </div>
          <div>
            <a style={styles.socialLink} href="https://www.facebook.com/neosavvy">
              <span className="icon">
                <i className="fa fa-facebook"></i>
              </span>
              <span>Facebook</span>
            </a>
          </div>
          <div>
            <a style={styles.socialLink} href="https://www.github.com/neosavvyinc">
              <span className="icon">
                <i className="fa fa-github"></i>
              </span>
              <span>Github</span>
            </a>
          </div>
          <div>
            <a style={styles.socialLink} href="https://www.medium.com/neosavvy-labs">
              <span className="icon">
                <i className="fa fa-medium"></i>
              </span>
              <span>Medium</span>
            </a>
          </div>
        </div>
        <div className="column is-3" style={styles.alignCenter}>
          <div className="columns">
            <div className="column is-4">
              <Link prefetch href="/">
                <img
                  src="static/images/assets/logo-white.png"
                  alt="NS"
                  style={styles.logo}
                  width={84}
                />
              </Link>
            </div>
            <div className="column is-8">
              <p>349 5th Avenue</p>
              <p>New York, NY 10016</p>
              <p>United States</p>
            </div>
          </div>
          <div className="column">
            <p>© Copyright 2017 Neosavvy, Inc.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default sizeMe()(Footer);

const createStyles = (isMobile) => {
  const defaults = {
    footer: {
      bottom: '0',
      left: '0',
      position: 'fixed',
      height: '400px',
      //backgroundColor: '#4A5C69',
      //backgroundColor: '#E88356',
      backgroundColor: '#E2632A',
      zIndex: '-1',
      width: '100%',
      color: '#EEF2F5'
    },
    footerTitle: {
      color: '#EEF2F5'
    },
    socialLink: {
      color: '#EEF2F5'
    },
    logo: {
      marginTop: '5px'
    },
    map: {
      border: '0',
      width: '100%',
      height: '300px'
    },
    socialContainer: {
    },
    alignCenter: {
      alignSelf: 'center'
    }
  };
  const mobile = isMobile ? {
    map: {
      display: 'none'
    }
  } : {};
  return _.merge(defaults, mobile);
}
