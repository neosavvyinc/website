import Link from 'next/link';
import Scroll from 'react-scroll';
import Main from '../layouts/main.layout';
import Services from '../components/services.component';
import Team from '../components/team.component';
import CaseStudies from '../components/case_studies.component';
import Contact from '../components/contact.component';

const {
  Link: ScrollLink,
  Element: ScrollElement
} = Scroll;

export default function() {
  return (
    <Main headerTransparent={true}>
      <div id="index-content-container">
        <div>
          <div style={styles.jumbo.container}>
            <div />
            <div style={styles.jumbo.content}>
              <h1 className="title is-1" style={{...styles.jumbo.text, ...styles.jumbo.title}}>NEOSAVVY</h1>
              <p style={{...styles.jumbo.text, ...styles.jumbo.subtitle}}>
                Delivering software development, professional training, and project delivery solutions to suit your business needs
              </p>
            </div>
            <ScrollLink to="case-studies" smooth={true} offset={0} duration={500}>
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

          <ScrollElement name="team">
            <Contact />
          </ScrollElement>
        </div>
      </div>
    </Main>
  );
}
const styles = {
  jumbo: {
    container: {
      //backgroundColor: '#F7F9FA',
      backgroundImage: `url('static/images/stockphotos-tinypng/hero-image.jpeg')`,
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
      marginTop: '100px'
    },
    cta: {
      marginBottom: '40px',
      cursor: 'pointer'
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
      marginLeft: '-100px'
    },
    subtitle: {
      fontSize: '22px',
      maxWidth: '45rem',
      marginBottom: '1.5rem',
      marginLeft: '-100px'
    },
  },
}
