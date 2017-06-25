import React from 'react';
import Link from 'next/link';
import Main from '../layouts/main.layout';

export default function() {
  return (
    <Main>
      <div className="page-wrap">
        <div className="section header-section">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1 className="text-primary">Working with Neosavvy</h1>
                <p>We’re proud of the work we do at Neosavvy. It’s dynamic, engaging
                  and challenges us to learn, do, and share more. We provide software
                  solutions that fit our clients’ practical and aesthetic needs. We
                  offer training, consulting, project planning, delivery, and management
                  services.</p>
                <p>We consider ourselves active members of the engineering community.
                  In a collaborative spirit, we strive to share with others what we
                  learn from our work. This is also why we have high standards (and
                  great benefits) for our Neosavvy employees.</p>
                <p>Benefits of working with Neosavvy include competitive salaries, company
                  reimbursed lunches, company paid health and dental insurance, short and
                  long term disability insurance, pre-tax commuter benefits, gym
                  membership with Equinox, SEP-IRA contribution, and participation in
                  company sponsored events.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <h1 className="text-primary">Engineering Positions</h1>

                <div className="sm-text-justify">
                  <p><Link href="/lead_engineer" className="hover-to-link"><a>Software Engineer Team Lead</a></Link></p>
                  <p><Link href="/engineer" className="hover-to-link"><a>Software Engineer</a></Link></p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <h1 className="text-primary">User Experience Positions</h1>

                <div className="sm-text-justify">
                  <p><Link href="/ux_lead" className="hover-to-link"><a>User Experience Lead</a></Link></p>
                  <p><Link href="/ux" className="hover-to-link"><a>User Experience Practitioner</a></Link></p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <h1 className="text-primary">How to apply</h1>

                <p className="sm-text-justify">
                  We are always accepting applications, please reach out to Dana at this email address
                  dana@neosavvy.com with the Job Title you are applying for.
                </p>
                <p>Let’s work together.</p>
                <p>No Recruiters Please.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}
