import React from 'react';

export default function() {
  return (
    <footer className="footer" style={styles.footer}>
      <div className="container">
        <div className="columns">
          <div className="column is-half">
            <div className="title is-3" style={styles.footerTitle}>Contact</div>
            <div>
              <p>349 5th Avenue</p>
              <p>New York, NY 10016</p>
              <p>United States</p>
            </div>
          </div>
          <div className="column auto">
            <div className="title is-3" style={styles.footerTitle}>Social Media</div>
            <div className="columns">
              <div className="column">
                <div>
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
              </div>
              <div className="column">
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
              <p>© Copyright 2017 Neosavvy, Inc.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    bottom: '0',
    left: '0',
    position: 'fixed',
    height: '230px',
    //backgroundColor: '#4A5C69',
    backgroundColor: '#E88356',
    //backgroundColor: '#E2632A',
    zIndex: '-1',
    width: '100%',
    color: '#EEF2F5'
  },
  footerTitle: {
    color: '#EEF2F5'
  },
  socialLink: {
    color: '#EEF2F5'
  }
};
