import React from 'react';
import Main from '../layouts/main.layout';

export default function() {
  return (
    <Main>
      <div className="page-wrap">
        <div className="section header-section">
          <div className="container">
            <div className="row">
              <div className="col-md-offset-3 col-md-6">
                <h1 className="text-primary">Corporate Headquarters</h1>
                <p>349 5th Avenue, Suite 412
                  <br/>New York, NY, 10016</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-offset-3 col-md-6">
                <iframe id="googlemap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6297769246025!2d-73.98654188404852!3d40.74817127932809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9ca6ada41%3A0xdc1a43cb9846b80a!2s349+5th+Ave%2C+New+York%2C+NY+10016!5e0!3m2!1sen!2sus!4v1462211604338" frameborder="0" style={{border: 0}} allowfullscreen=""></iframe>
              </div>
            </div>
            <div className="row">
              <div className="col-md-offset-3 col-md-6">
                <h1 className="text-primary">Send us a note!</h1>

                <p className="sm-text-justify">
                  Feel free to drop us a line
                  contact@neosavvy.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  )
}
