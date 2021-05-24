import React from "react";
import { Row } from 'react-bootstrap';
import aboutPage from '../images/aboutPage.JPG';
import background3 from '../images/background3.JPG'

/* Hi! Here is the latest iteration of my job search materials. There hasn't been much change in my brand statement as that has been labelled "career ready" several months ago. I made minor changes to my GitHub profile per the previous suggestions. My LinkedIn profile has changed rather substantially. The biggest change here is that I have been able to get two recommendations and am expecting a possible third. My resume is reflecting changes recommended by Rebecca Klasson...mainly a more robust projects section as well as suggestions made after my previous submission. Note I have a single page version as well...Rebecca suggests that a two-page resume is better these days...finally my portfolio has seen many changes per previous suggestions to the bio, addition of a tech section, additional details in the portfolio page, and nice background images. Note I am still in the process of polishing the background.
*/ 

function About() {
    return (
        <Row style={{backgroundImage: `url(${background3})`}}>
        <div className="col-xs-1 col-md-1 col-lg-2"></div>
        <div className="col-xs-10 col-md-7 col-lg-6">
          <div className="card-index mb-5">
            <div className="row no-gutters">
                <section className="card-body">
                  <h2 className="card-title text-center mb-4">About Me</h2>
                  <p style={{marginBottom: "20px"}}>
                    <img src={aboutPage} className="index-img img-thumbnail float-left mr-2 mb-1" alt="Nick Rider" style={{height: "250px", width: "25%", minWidth: "170px"}}></img>

{/*CAREER SERVICES WANTS ME TO REPLACE THIS WITH SOMETHING THAT SHOWS MORE ENTHUSIASM FOR THE INDUSTRY THAT I AM BREAKING INTO: */}

                    My name is Nick Rider. I am passionate about history, aviation, the outdoors, and management. In a work setting, my core strengths 
                    are the ability to organize and systemize. I enjoy bringing stability and predictability to the foundational parts of a business 
                    so that company leadership can have freedom to pursue their vision for the company. I am a published author and have ten years' 
                    experience in leadership and management roles in the Civil Air Patrol. In 2017 I graduated from Thomas Edison University with a 
                    Bachelor's degree in Management. Prior to COVID-19, I held a corporate management position in a local company where I worked closely 
                    with the company CEO and leadership. Currently unemployed, I am attending a course through the University of Washington to develop 
                    skills as a web developer.
                  </p>

{/* BE SURE TO FILL IN THE BLANKS BEFORE PUSHING TO HEROKU!!! */}

                    {/* My name is Nick! I am a full-stack web developer with skills in JavaScript, NodeJS, MongoDB, React, and several other technologies. I am currently in the job market looking for an entry level role role as a web developer, ______, ______, or ______. I also have management, leadership, and communication skills from previous experience as well as a management degree from Thomas Edison University. I am very passionate about organizing and systemizing...bringing order out of chaos and stretching myself to learn new skills is what I love about most about being a web developer. My dream is that the internet can be made into a more organized, useful, and visually pleasant place to learn and do business. Wherever I work I strive to bring skills to the table that enable company leadership the freedom to pursue their visions for their company. I am excited to utilize my skills in a fast-paced, bottom-line focused team to build a better experience on the web.  */}

{/* ALTERNATIVELY I COULD USE MY BRAND STATEMENT: */}

                    {/* Full-stack web developer with a wide-range of management skills. I recently earned a certificate in full stack development from the University of Washington with newly developed skills in JavaScript, NodeJS, MongoDB,  responsive web design, and many others. I also have a BSBA in Management from Thomas Edison University and ten years of management experience. My approach to work is very analytical, but I also enjoy building and nourishing professional relationships in the workplace. I am passionate about organizing and systemizing and enjoy bringing stability and consistency to the places I work so that leadership can have freedom to pursue their visions for the company. I am excited to utilize my skills in a fast-paced, bottom-line focused team to build a better experience on the web. 
                    */}
        {/* I prefer the previous example because it lists examples of jobs that I would be interested in...it seems like that would be more useful to potential employers, but I could be mistaken. */}
                    
                  <h4 className="card-title text-center mb-4">Technologies and Skills:</h4>
                  <ul style={{marginLeft: "15%"}}>
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                  </ul>
                </section>
            </div>
          </div>
        </div>
        <div className="col-xs-1 col-md-4 col-lg-4"></div>
  </Row>
    )
}

export default About