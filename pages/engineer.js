import React from 'react';
import Main from '../layouts/main.layout';

export default function() {
  return (
    <Main>
      <div className="page-wrap">
        <div className="section header-section">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1 className="text-primary">Engineering at Neosavvy</h1>
                <h3>About the Position:</h3>
                <p className="sm-text-justify">We’re looking for developers with technical aptitude and the people skills
                  to match. It’s important that everyone on our team takes an iterative,
                  client-centric approach to projects. We also want team members to have
                  effective communication skills, be adaptable and flexible, and constantly
                  strive for on-time continuous deployment.</p>

                <h3>About You:</h3>
                <p className="sm-text-justify">You can demonstrate a solid understanding of full stack
                  development in HTML/CSS/Javascript hooked into a Scala, Java, Python or
                  Rails JSON/REST-ful API. You (like us) currently focus on Javascript frontend development,
                  but also have an interest in projects with Scala, Java, or Python backends exposed
                  as REST-ful services.</p>

                <h3>About Us:</h3>
                <p>We’re proud of the work we do at Neosavvy. It’s dynamic,
                  engaging and challenges us to learn, do, and share more. We
                  provide software solutions that fit our clients’ practical
                  and aesthetic needs. We offer training, consulting, project
                  planning, delivery, and management services.</p>

                <p>We consider ourselves active members of the engineering community.
                  In a collaborative spirit, we strive to share with others what
                  we learn from our work. This is also why we have high standards
                  (and great benefits) for our Neosavvy employees.</p>


                <p>All Neosavvy team members earn competitive salaries, receive free
                  lunches, and participation in company sponsored events.</p>

                <h3>How to Apply:</h3>
                <p>Send an email to dana@neosavvy.com with Software Engineer in the
                  subject line.</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  )
}
