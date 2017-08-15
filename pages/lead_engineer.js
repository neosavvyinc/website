import React, { Component } from 'react';
import Link from 'next/link';
import Main from '../layouts/main.layout';

export default class LeadEngineer extends Component {
  sendMail = () => {
    var link = "mailto:dana@neosavvy.com"
      + "&subject=" + escape("Lead Software Engineer Position");

    window.location.href = link;
  }

  render() {
    return (
      <Main>
        <div className="section container">
          <div style={styles.navPadding} />
          <div style={styles.content}>
            <h2 className="title is-2">
              <Link prefetch href="/careers"><i className="fa fa-chevron-left" style={styles.backButton}/></Link>
              Lead Software Engineer
            </h2>
            <p>
              We are looking for trend-setting and cutting edge
              technology leaders to join our consulting team at Neosavvy. We strive to
              educate our clients and lead them into uncharted territories in technology.
              We want to partner with others who have a proven track record of managing
              technical direction and technical colleagues to help solve our customers
              business problems. Our customers trust us, and we need highly skilled team mates
              to help further and maintain our relationships.
            </p>
            <br/>
            <h3 className="title is-3">About you</h3>
            <p>
              You have a proven track record of managing small teams and
              possibly numerous stakeholders who look to you for solutions to open ended business
              problems. You additionally can demonstrate a solid understanding of full stack
              development in HTML/CSS/Javascript hooked into a Scala, Java, Python or
              Rails JSON/REST-ful API. You (like us) currently focus on Javascript frontend development,
              but also have an interest in projects with Scala, Java, or Python backends exposed
              as REST-ful services.
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
