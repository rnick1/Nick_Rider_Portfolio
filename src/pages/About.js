import React from "react";
import { Row } from 'react-bootstrap';

function About() {
    return (
        <Row>
        <div className="col-xs-1 col-md-1 col-lg-2"></div>
        <div className="col-xs-10 col-md-7 col-lg-6">
          <div className="card-index mb-5">
            <div className="row no-gutters">
                <section className="card-body">
                  <h2 className="card-title text-center mb-4">About Me</h2>
                  <p>
                    <img src='public/images/About-Home-Page-Photo.jpg' className="index-img img-thumbnail float-left mr-2 mb-1" alt="Nick Rider"></img>
                    My name is Nick Rider. I am passionate about history, aviation, the outdoors, and management. In a work setting, my core strengths 
                    are the ability to organize and systemize. I enjoy bringing stability and predictability to the foundational parts of a business 
                    so that company leadership can have freedom to pursue their vision for the company. I am a published author and have ten years' 
                    experience in leadership and management roles in the Civil Air Patrol. In 2017 I graduated from Thomas Edison University with a 
                    Bachelor's degree in Management. Prior to COVID-19, I held a corporate management position in a local company where I worked closely 
                    with the company CEO and leadership. Currently unemployed, I am attending a course through the University of Washington to develop 
                    skills as a web developer.</p>
                </section>
            </div>
          </div>
        </div>
        <div className="col-xs-1 col-md-4 col-lg-4"></div>
  </Row>
    )
}

export default About