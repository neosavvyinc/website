import React from 'react';
import _ from 'lodash';
import Link from 'next/link';
import Main from '../layouts/main.layout';

const positions = [
  {
    role: 'Lead Software Engineer',
    link: '/lead_engineer',
    field: 'Engineering',
    location: 'New York, NY'
  },
  {
    role: 'Software Engineer',
    link: '/engineer',
    field: 'Engineering',
    location: 'New York, NY'
  },
  {
    role: 'Lead User Experience Practitioner',
    link: '/ux_lead',
    field: 'UX',
    location: 'New York, NY'
  },
  {
    role: 'User Experience Practitioner',
    link: '/ux',
    field: 'UX',
    location: 'New York, NY'
  },
];

export default function() {
  return (
    <Main headerTransparent={false}>
      <div style={styles.navPadding} />
      <div className="section container">
        <h1 className="title is-1">Working at Neosavvy</h1>
        <div className="columns">
          <div className="column is-two-thirds" style={styles.text}>
            <div className="content is-medium">
              <p>We’re proud of the work we do at Neosavvy. It’s dynamic, engaging
                and challenges us to learn, do, and share more. We provide software
                solutions that fit our clients’ practical and aesthetic needs. We
                offer training, consulting, project planning, delivery, and management
                services.</p>
              <br/>
              <p>We consider ourselves active members of the engineering community.
                In a collaborative spirit, we strive to share with others what we
                learn from our work. This is also why we have high standards (and
                great benefits) for our Neosavvy employees.</p>
            </div>
          </div>
          <div className="column">
            <div className="notification">
              <h4 className="title is-4">Benefits</h4>
              <ul>
                <li>Competitive salary</li>
                <li>Company reimbursed lunches</li>
                <li>Health and Dental insurance</li>
                <li>Short and long term disability insurance</li>
                <li>Pre-tax commuter benefits</li>
                <li>Equinox gym membership</li>
                <li>SEP-IRA contribution</li>
                <li>Participation in company sponsored events</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="notification">
          <h2 className="title is-2">Join Us</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Role</th>
                <th>Field</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {
                _.map(positions, position => (
                  <tr key={position.link}>
                    <td><Link href={position.link}><a>{position.role}</a></Link></td>
                    <td>{position.field}</td>
                    <td>{position.location}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <div className="container is-fluid">
          <p>No Recruiters Please.</p>
        </div>
      </div>
      <div style={styles.footerPadding} />
    </Main>
  );
}

const styles = {
  navPadding: {
    paddingTop: '80px'
  },
  text: {
    alignSelf: 'center'
  },
  footerPadding: {
    paddingBottom: '80px'
  }
};
