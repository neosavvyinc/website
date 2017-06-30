import _ from 'lodash';
import sizeMe from 'react-sizeme';
import MemberCard from './member_card.component';

const bios = {
  adam: "Adam has nearly fifteen years of computer science and software development experience and founded Neosavvy in 2008. He is a graduate of North Carolina State University where he studied computer science and he has served as a developer, software engineer, and consultant for IBM, ITS, Roundarch, Motricity, Morgan Stanley, HBO, Bloomberg and many other large firms and startups. At Neosavvy he has delivered numerous projects, including various EC2- and Rackspace-support cloud services utilizing HTML5 AngularJS, and other languages. In addition to serving as lead software developer on many projects, Adam actively leads Neosavvy’s business, client, and employee interests.\nAdam lives in Brooklyn and as a North Carolina native he enjoys camping, hiking, and backpacking.",
  trevor: "Trevor is a native Chicagoan and joined Neosavvy at the beginning of 2013. Over the course of his career he has participated in development efforts for Keyser Group, Bloomberg Sports, Pearson, Morgan Stanley, RunEnergy, and others. He is a graduate of Northwestern University where his combined study of computer science, film production, and history informs his diverse background and dynamic ability to facilitate communication and lead engineering efforts among various project team members and stakeholders. His past software experience begins with Adobe Flex and extends to Java Enterprise development, as well as Ruby on Rails and Python. As a developer, he is also proficient in Angular JS and other HTML5 technologies.\nTrevor lives with his wife in Queens and enjoys concerts, cowboy boots, and barbeque.",
  pablo: "After meeting Neosavvy as a software engineering intern for HBO in 2013, Pablo officially joined the Neosavvy team in April 2014, going on to provide front-end development, testing and tools for Bloomberg, Honest Buildings, and others. Originally a student of industrial engineering at the University of Basque Country in Leioa, Spain, Pablo transferred to the U.S. in 2012 to complete his bachelor’s degree in computer engineering from New York University, where he studied data analysis and object-oriented programming and was awarded a scholarship from the Polytechnic Institute of NYU. His specialties include React, AngularJS and HTML5 technologies.\nPablo trained for eight years as a kickboxer and enjoys discovering new food and watching and re-watching his favorite cult films from the ‘70s and ‘80s.",
  sushi: "Sushindhran (“Sushi”) joined Neosavvy in June 2014, working on several Javascript- based projects for HBO as he completed a master’s program in computer science from New York University. Originally from India, where he received his bachelor’s degree in computer science and engineering, Sushi leveraged an internship with Infosys, the second-largest consulting company in India, to become a systems engineer for education and research for the company, providing teaching, mentoring and project oversight for hundreds of new recruits. In addition to teaching and developing coursework and tests for HTML, Javascript, Core Java, JSP, JSF, POJO, JPA, RDBMS, SQL and PL/SQL, his specialties include JavaScript, Java, C, C++, Python and others. In January 2016, Sushi joined Neosavvy’s Bloomberg team as a client-side developer.\nWhen he’s not learning riffs on his new guitar, Sushi enjoys gaming, hiking and exploring the five boroughs city for new cuisine.",
  dana: "Dana has been an active member of the Neosavvy team since its founding in 2008, originally overseeing administration and payroll before transitioning to a more strategic HR role in 2016, where she is responsible for recruitment, client engagement, business administration, and process and policy implementation. Previously, she was an HR generalist for RR Donnelley, where she provided HR guidance, recruitment and cross-departmental collaboration for the Fortune 500 company. Before that, Dana was an HR generalist for the Jewish Board of Family and Children’s Services and a coordinator for CEI, a business and equipment supplier for the Research Triangle in North Carolina.\nA graduate of North Carolina State University with a bachelor’s in business management, Dana also holds a Professional in Human Resources (PHR) designation from the HR Certification Institute and a SHRM Certified Professional (SHRM-CP) designation from the Society for Human Resource Management.\nDana lives in New York and enjoys strength training, hiking and camping.",
};

const Team = ({ size }) => {
  const isMobile = size.width < 768;
  const styles = createStyles(isMobile);

  return (
    <section className="container" style={styles.content}>
      <h1 className="title is-1" style={styles.title}>Core Team</h1>
      <div className="columns is-centered" style={styles.teamColumn}>
        <span style={styles.card}>
          <MemberCard
            name="Adam Parrish"
            imageURL="static/images/headshots-portrait/adam-gradient.png"
            description="Managing Partner & Software Engineer"
            bio={bios.adam}
            twitter="wparrish"
            linkedin="adamparrish"
            medium="adamparrish"
          />
        </span>
        <span style={{...styles.card, ...styles.cardCenter}}>
          <MemberCard
            name="Trevor Ewen"
            imageURL="static/images/headshots-portrait/trevor-gradient.png"
            description="Partner & Software Engineer"
            bio={bios.trevor}
            twitter="tewen"
            linkedin="trevorewen"
            medium="tewen"
          />
        </span>
        <span className={styles.card}>
          <MemberCard
            name="Pablo Alonso"
            imageURL="static/images/headshots-portrait/pablo-gradient.png"
            description="Partner & Software Engineer"
            bio={bios.pablo}
            twitter="pabloalonsos"
            linkedin="pabloalonsos"
            medium="palonso"
          />
        </span>
      </div>
      <div className="columns is-centered" style={styles.teamColumn}>
        <span style={styles.card}>
          <MemberCard
            name="Sushindhran Harikrishnan"
            imageURL="static/images/headshots-portrait/sushi-gradient.png"
            description="Partner & Software Engineer"
            bio={bios.sushi}
            twitter="sushindhran"
            linkedin="sushindhran"
            medium="sushi_21846"
          />
        </span>
        <span style={{...styles.card, ...styles.cardCenter}}>
          <MemberCard
            name="Dana Parrish"
            imageURL="static/images/headshots-portrait/dana-gradient.png"
            description="HR Generalist"
            bio={bios.dana}
            twitter="neosavvy"
            linkedin="danaparrish"
          />
        </span>
        <span style={styles.card}>
          <MemberCard
            name="CAREERS"
            imageURL="static/images/stock-adjusted/careers.jpg"
            link="/careers"
          />
        </span>
      </div>
    </section>
  );
}

export default sizeMe()(Team);

const createStyles = (isMobile) => {
  const defaults = {
    content: {
      marginTop: '80px',
    },
    title: {
      textAlign: 'center'
    },
    teamColumn: {
      paddingBottom: '5px'
    },
    card: {},
    cardCenter: {
      marginRight: '5px',
      marginLeft: '5px',
    }
  };
  const mobile = isMobile ? {
    content: {
      margin: '40px 0',
    },
    teamColumn: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    card: {
      marginBottom: '5px',
    }
  } : null;
  return _.merge(defaults, mobile);
}
