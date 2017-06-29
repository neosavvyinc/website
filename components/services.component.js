import _ from 'lodash';
import sizeMe from 'react-sizeme';

const Services = function({ size }) {
  const isMobile = size.width < 768;
  const styles = createStyles(isMobile);

  return (
    <div className="container" style={styles.content}>
      <h1 className="title is-1" style={{ textAlign: 'center' }}>Services</h1>
      <section className="columns" style={styles.card.container}>
        <div className="column is-4 is-offset-1" style={styles.card.image.container}>
          <img
            src="static/images/stockphotos-tinypng/consulting-1.jpeg"
            className="img-responsive"
            style={styles.card.image.body}
          />
        </div>
        <div className="column is-6">
          <h3 className="title is-3">Consulting</h3>
          <p className="sm-text-justify">With software it’s tough knowing the difference between what you want
            and what you need. We’re available as a sounding board, a knowledge resource,
            a collaborator, a manager, and whoever else you might need to be sure you’re
            getting the right product with the best means and the strongest teams.</p>
        </div>
      </section>

      <section className="columns" style={styles.card.container}>
        <div className="column is-4 is-offset-1" style={styles.card.image.container}>
          <img
            src="static/images/stockphotos-tinypng/project-management-1.jpg"
            className="img-responsive"
            style={styles.card.image.body}
          />
        </div>
        <div className="column is-6">
          <h3 className="title is-3">Design</h3>
          <p className="sm-text-justify">We partner with our customers to help manage the design process by
            delivering useful mockups, wireframes, visual designs as well as User Experience guidance.
            We want to provide thoughtful user experience guidance without all the extra management
            structure that other digital agencies require, we partner with your team to get you what you
            know you want built.
          </p>
        </div>
      </section>

      <section className="columns" style={styles.card.container}>
        <div className="column is-4 is-offset-1" style={styles.card.image.container}>
          <img
            src="static/images/stockphotos-tinypng/training-2.jpg"
            className="img-responsive"
            style={styles.card.image.body}
          />
        </div>
        <div className="column is-6">
          <h3 className="title is-3">Embedded Team</h3>
          <p className="sm-text-justify">Many large projects have in house teams to manage their project, however
            lack the proper talent to hit their milestones. Neosavvy provides the talent to join your software
            development or web development organization to collaborate with your team. We avoid all the extra
            overhead of adding management, just the agile minded user experience and software engineers you
            require to ramp up quickly and start shipping product.
          </p>
        </div>
      </section>

      <section className="columns" style={styles.card.container}>
        <div className="column is-4 is-offset-1" style={styles.card.image.container}>
          <img
            src="static/images/stockphotos-tinypng/training-1.png"
            className="img-responsive"
            style={styles.card.image.body}
          />
        </div>
        <div className="column is-6">
          <h3 className="title is-3">Training</h3>
          <p className="sm-text-justify">We believe that knowledge means empowerment. Our team of experienced development,
            computer science and engineering, and IT professionals bring a wide range
            of hands-on knowledge and are available to give you the technical skills
            you need to learn and succeed.</p>
        </div>
      </section>

      <section className="columns" style={styles.card.container}>
        <div className="column is-4 is-offset-1" style={styles.card.image.container}>
          <img
            src="static/images/stockphotos-tinypng/project-management-1.jpg"
            className="img-responsive"
            style={styles.card.image.body}
          />
        </div>
        <div className="column is-6">
          <h3 className="title is-3">Project Management</h3>
          <p className="sm-text-justify">Whether you’re a big multinational or a local startup, you know that it’s
            difficult deploying new projects and programs. From planning to project
            delivery, we’re available to lead, manage, or complement current staff
            and assure successful project deployment.</p>
        </div>
      </section>
    </div>
  );
}

export default sizeMe()(Services);

const createStyles = (isMobile) => {
  const defaults = {
    content: {
      marginTop: '80px',
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
    }
  };

  const mobile = isMobile ? {
    content: {
      margin: '40px 10px 0 10px',
      textAlign: 'center'
    }
  } : null;

  return _.merge(defaults, mobile);
};

