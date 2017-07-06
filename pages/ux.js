import React, { Component } from 'react';
import Link from 'next/link';
import Main from '../layouts/main.layout';

export default class Engineer extends Component {
  sendMail = () => {
    var link = "mailto:dana@neosavvy.com"
      + "?cc=contact@neosavvy.com"
      + "&subject=" + escape("User Experience Practitioner Position");

    window.location.href = link;
  }

  render() {
    return (
      <Main>
        <div className="container">
          <div style={styles.navPadding} />
          <div style={styles.content}>
            <h2 className="title is-2">
              <Link prefetch href="/careers"><i className="fa fa-chevron-left" style={styles.backButton}/></Link>
              User Experience Practitioner
            </h2>
            <p>
              As a UX engineering team member, you will be joining a highly
              skilled software engineering team. You will be on the cutting
              edge of our UX practice as we explore a greater offering diversity
              from our existing development focused practice. Hi-depth knowledge
              of multiple proven, modern design and prototype toolsets is
              required. Axure, Sketch, Invision, Principle, Omnigraffle, Photoshop, and others.
              Your environment will be a cross functional delivery team of
              engineers and designers.
            </p>
            <br/>
            <h3 className="title is-3">About you</h3>
            <p>
              You are a motivated person who shares our passion for product
              engineering and development. Like us, you desire to advance
              our nimble, engaged, and collaborative consulting team. You
              have technical, visual, and design aptitude. You pair that
              with great leadership and collaborative skills.
            </p>


            <p>
              It’s important that everyone on our team takes an iterative,
              client-centric approach to projects. Team members should also
              practice effective communication skills, adaptability,
              flexibility, and constantly strive for on-time project delivery.
            </p>
            <br/>
            <h3 className="title is-3">About us</h3>
            <p>
              We’re proud of the work we do at Neosavvy. It’s dynamic,
              engaging and challenges us to learn, do, and share more. We
              provide software solutions that fit our clients’ practical
              and aesthetic needs. We offer training, consulting, project
              planning, delivery, and management services.
            </p>
            <p>
              We consider ourselves active members of the engineering community.
              In a collaborative spirit, we strive to share with others what
              we learn from our work. This is also why we have high standards
              (and great benefits) for our Neosavvy employees.
            </p>
            <p>
              All Neosavvy team members earn competitive salaries, receive free
              lunches, and participation in company sponsored events.
            </p>
          </div>

          <div style={styles.buttonContainer}>
            <button
              style={styles.button}
              className="button"
              onClick={this.sendMail}
            >
              Apply Now!
      </button>
    </div>

    {/*<ApplyNow onClick={this.sendMail} />*/}

    <div style={styles.footerPadding} />
      </div>
      </Main>
    );
  }
}
const styles = {
  navPadding: {
    paddingTop: '80px'
  },
  footerPadding: {
    paddingBottom: '80px'
  },
  backButton: {
    marginTop: '15px',
    marginRight: '15px',
    cursor: 'pointer'
  },
  content: {
    marginBottom: '80px'
  },
  buttonContainer: {
    textAlign: 'center'
  },
  button: {
    marginTop: '20px',
    maxWidth: '250px',
    backgroundColor: '#E2632A',
    fontSize: '20px',
    color: 'white',
    width: '100%',
    height: '50px',
    borderRadius: '0'
  }
};
