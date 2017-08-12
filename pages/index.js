import Link from 'next/link';
import Scroll from 'react-scroll';
import sizeMe from 'react-sizeme';
import Main from '../layouts/main.layout';
import Services from '../components/services.component';
import Team from '../components/team.component';
import CaseStudies from '../components/case_studies.component';
import Contact from '../components/contact.component';

const {
  Link: ScrollLink,
  Element: ScrollElement
} = Scroll;

const index = function({ size }) {
  const contactBtn = size.width < 768? (
    <span style={{ ...styles.jumbo.button, border: '0', marginRight: '15px'}}>
      <i className="fa fa-envelope-o" style={{marginTop: '15px'}} />
    </span>
  ) : (
      <button className="button is-outline" style={styles.jumbo.button}>
        <span style={styles.jumbo.text}>CONTACT</span>
      </button>
  );
  return (
    <Main headerTransparent={true} hideLogoInHeader={true}>
      <div id="index-content-container">
        <style dangerouslySetInnerHTML={{__html: '.contact .ReactForm { width: 100%; max-width: 672px; } .contact .ReactForm input { width: 100%; } '}} />
        <div>
          <div style={styles.jumbo.container}>
            <div style={styles.jumbo.contact}>
              <ScrollLink
                style={{ zIndex: 1000 }}
                to="contact"
                smooth="easeInOutCubic"
                offset={0}
                duration={500}
              >
                { contactBtn }
              </ScrollLink>
            </div>
            <div style={styles.jumbo.content}>
              <Link prefetch
                    href="/">
                <img
                  src={`/static/images/assets/logo-white.png`}
                  alt="NS"
                  style={styles.jumbo.logo}
                />
              </Link>
              <h1 className="title is-1" style={{...styles.jumbo.text, ...styles.jumbo.title}}>NEOSAVVY</h1>
              <p style={{...styles.jumbo.text, ...styles.jumbo.subtitle}}>
                Delivering software development, professional training, and project delivery solutions to suit your business needs
              </p>
            </div>
            <ScrollLink to="case-studies" smooth="easeInOutCubic" offset={0} duration={500}>
              <div style={styles.jumbo.cta}>
                <h3 className="title is-3" style={styles.jumbo.text}>LEARN MORE</h3>
                <h3 className="icon is-3" style={{...styles.jumbo.text, ...styles.jumbo.iconContainer}}>
                  <i className="fa fa-angle-down" style={styles.jumbo.icon}/>
                </h3>
              </div>
            </ScrollLink>
          </div>

          <ScrollElement name="case-studies">
            <CaseStudies />
          </ScrollElement>

          <ScrollElement name="services">
            <Services />
          </ScrollElement>

          <ScrollElement name="team">
            <Team />
          </ScrollElement>

          <ScrollElement name="contact" className="contact">
            <Contact />
          </ScrollElement>
        </div>
      </div>
    </Main>
  );
};

export default sizeMe()(index);

const styles = {
  jumbo: {
    container: {
      //backgroundColor: '#F7F9FA',
      backgroundImage: `url('/static/images/stockphotos-tinypng/hero-image.jpeg')`,
      height: '100vh',
      boxShadow: '0 5px 8px 0 rgba(72,89,102,.06)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',

      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    content: {
      margin: '0 10px'
    },
    cta: {
      cursor: 'pointer'
    },
    logo: {
      cursor: 'pointer',
      float: 'left',
      width: '46px',
      marginTop: '11px',
      marginRight: '6px'
    },
    iconContainer: {
      textAlign: 'center',
      width: '100%'
    },
    icon: {
      fontSize: '44px',
    },
    text: {
      color: 'white'
    },
    title: {
      fontWeight: '800',
    },
    subtitle: {
      fontSize: '22px',
      maxWidth: '45rem',
      marginBottom: '1.5rem',
    },
    contact: {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
    },
    button: {
      color: 'white',
      background: 'transparent',
      border: '1px solid white',
      cursor: 'pointer',
      marginTop: '10px',
      marginRight: '10px',
      zIndex: 99
    }
  },
};
