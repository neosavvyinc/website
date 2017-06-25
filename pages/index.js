import Link from 'next/link';
import Main from '../layouts/main.layout';
import MemberCard from '../components/member_card.component';

export default function() {
  return (
    <Main headerTransparent={true}>
      <div id="index-content-container">
        <div>
          <div style={styles.jumbo.container}>
            <div style={styles.jumbo.content}>
              <h1 className="title is-1" style={styles.jumbo.text}>NEOSAVVY</h1>
              <p style={{...styles.jumbo.text, ...styles.jumbo.subtitle}}>
                Delivering software development, professional training, and project delivery solutions to suit your business needs
              </p>
              <button className="button is-primary" style={styles.jumbo.button}>LEARN MORE</button>
            </div>
          </div>

          <div className="container">
            <section className="columns" style={styles.card.container}>
              <div className="column is-4 is-offset-2" style={styles.card.image.container}>
                <img
                  src="static/images/stockphotos-tinypng/consulting-1.jpeg"
                  className="img-responsive"
                  style={styles.card.image.body}
                />
              </div>
              <div className="column is-4">
                <h1 className="text-primary sm-text-center">Consulting</h1>
                <p className="sm-text-justify">With software it’s tough knowing the difference between what you want
                  and what you need. We’re available as a sounding board, a knowledge resource,
                  a collaborator, a manager, and whoever else you might need to be sure you’re
                  getting the right product with the best means and the strongest teams.</p>
              </div>
            </section>

            <section className="columns" style={styles.card.container}>
              <div className="column is-4 is-offset-2" style={styles.card.image.container}>
                <img
                  src="static/images/stockphotos-tinypng/project-management-1.jpg"
                  className="img-responsive"
                  style={styles.card.image.body}
                />
              </div>
              <div className="column is-4">
                <h1 className="text-primary sm-text-center">Design</h1>
                <p className="sm-text-justify">We partner with our customers to help manage the design process by
                  delivering useful mockups, wireframes, visual designs as well as User Experience guidance.
                  We want to provide thoughtful user experience guidance without all the extra management
                  structure that other digital agencies require, we partner with your team to get you what you
                  know you want built.
                </p>
              </div>
            </section>

            <section className="columns" style={styles.card.container}>
              <div className="column is-4 is-offset-2" style={styles.card.image.container}>
                <img
                  src="static/images/stockphotos-tinypng/training-2.jpg"
                  className="img-responsive"
                  style={styles.card.image.body}
                />
              </div>
              <div className="column is-4">
                <h1 className="text-primary sm-text-center">Embedded Team</h1>
                <p className="sm-text-justify">Many large projects have in house teams to manage their project, however
                  lack the proper talent to hit their milestones. Neosavvy provides the talent to join your software
                  development or web development organization to collaborate with your team. We avoid all the extra
                  overhead of adding management, just the agile minded user experience and software engineers you
                  require to ramp up quickly and start shipping product.
                </p>
              </div>
            </section>

            <section className="columns" style={styles.card.container}>
              <div className="column is-4 is-offset-2" style={styles.card.image.container}>
                <img
                  src="static/images/stockphotos-tinypng/training-1.png"
                  className="img-responsive"
                  style={styles.card.image.body}
                />
              </div>
              <div className="column is-4">
                <h1 className="text-primary sm-text-center">Training</h1>
                <p className="sm-text-justify">We believe that knowledge means empowerment. Our team of experienced development,
                  computer science and engineering, and IT professionals bring a wide range
                  of hands-on knowledge and are available to give you the technical skills
                  you need to learn and succeed.</p>
              </div>
            </section>

            <section className="columns" style={styles.card.container}>
              <div className="column is-4 is-offset-2" style={styles.card.image.container}>
                <img
                  src="static/images/stockphotos-tinypng/project-management-1.jpg"
                  className="img-responsive"
                  style={styles.card.image.body}
                />
              </div>
              <div className="column is-4">
                <h1 className="text-primary sm-text-center">Project Management</h1>
                <p className="sm-text-justify">Whether you’re a big multinational or a local startup, you know that it’s
                  difficult deploying new projects and programs. From planning to project
                  delivery, we’re available to lead, manage, or complement current staff
                  and assure successful project deployment.</p>
              </div>
            </section>

            <section>
              <div className="columns">
                <div className="column">
                  <MemberCard
                    name="Adam Parrish"
                    twitterHandle="wparrish"
                    imageURL="static/images/headshots-tinypng/adam.jpg"
                    description="Managing Partner & Software Engineer"
                  />
                </div>
                <div className="column">
                  <MemberCard
                    name="Trevor Ewen"
                    twitterHandle="tewen"
                    imageURL="static/images/headshots-tinypng/trevor.jpg"
                    description="Partner & Software Engineer"
                  />
                </div>
                <div className="column">
                  <MemberCard
                    name="Pablo Alonso"
                    twitterHandle="pabloalonsos"
                    imageURL="static/images/headshots-tinypng/pablo.jpg"
                    description="Partner & Software Engineer"
                  />
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <MemberCard
                    name="Sushindhran Harikrishnan"
                    twitterHandle="sushindhran"
                    imageURL="static/images/headshots-tinypng/sushi.jpg"
                    description="Partner & Software Engineer"
                  />
                </div>
                <div className="column">
                  <MemberCard
                    name="Dana Parrish"
                    twitterHandle="neosavvy"
                    imageURL="static/images/assets/logo.png"
                    description="HR Generalist"
                  />
                </div>
                <div className="column"/>
              </div>
            </section>
          </div>
        </div>
    </div>
  </Main>
  );
}
const styles = {
  jumbo: {
    container: {
      //backgroundColor: '#F7F9FA',
      // backgroundImage: `url('static/images/stockphotos-tinypng/hero-image.jpeg')`,
      height: '45rem',
      boxShadow: '0 5px 8px 0 rgba(72,89,102,.06)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
      backgroundPosition: 'center'
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    },
    text: {
      color: 'black'
    },
    subtitle: {
      maxWidth: '35rem',
      textAlign: 'center',
      marginBottom: '1.5rem'
    },
    button: {
      marginBottom: '1.5rem',
      backgroundColor: '#E2632A'
    }
  },
  card: {
    container: {
      alignItems: 'center',
    },
    image: {
      container: {},
      body: {
        maxHeight: '20rem'
      }
    }
  },
  body: {
    paddingTop: '20px',
    height: '500px'
  }
}
