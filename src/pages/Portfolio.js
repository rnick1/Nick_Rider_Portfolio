import React from "react";
import Project from "../components/Project";
import projects from "../projects.json";
import workoutTracker from "../images/workoutTracker.PNG"
import germPod from "../images/germPod.PNG"
import eCommerceBackend from "../images/eCommerceBackend.PNG"
import readmeGenerator from "../images/readmeGenerator.PNG"
import mealPlanner from "../images/mealPlanner.PNG"
import passwordGenerator from "../images/passwordGenerator.PNG"
import background4 from '../images/background4.JPG'

function Portfolio() {
  return (
    <div style={{backgroundImage: `url(${background4})`}}>
    <div className="container mt-2 mb-2">
    <div className="row">
      <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
      <div style={{backgroundColor: 'transparent'}} className="col-xs-10 col-sm-9 col-md-8 col-lg-7">
        <h2 className="text-center"><b>Portfolio</b></h2>
        <div className="row row-cols-1 row-cols-lg-2">
        <Project
          title={projects[0].title}
          deployed_link={projects[0].deployed_link}
          github_link={projects[0].github_link}
          image={workoutTracker}
          concept={projects[0].concept}
          technologies={projects[0].technologies}
        />
        <Project
          title={projects[1].title}
          deployed_link={projects[1].deployed_link}
          github_link={projects[1].github_link}
          image={germPod}
          concept={projects[1].concept}
          technologies={projects[1].technologies}
        />
        <Project
          title={projects[2].title}
          deployed_link={projects[2].deployed_link}
          github_link={projects[2].github_link}
          image={eCommerceBackend}
          concept={projects[2].concept}
          technologies={projects[2].technologies}
        />
        <Project
          title={projects[3].title}
          deployed_link={projects[3].deployed_link}
          github_link={projects[3].github_link}
          image={readmeGenerator}
          concept={projects[3].concept}
          technologies={projects[3].technologies}
        />
        <Project
          title={projects[4].title}
          deployed_link={projects[4].deployed_link}
          github_link={projects[4].github_link}
          image={mealPlanner}
          concept={projects[4].concept}
          technologies={projects[4].technologies}
        />
        <Project
          title={projects[5].title}
          deployed_link={projects[5].deployed_link}
          github_link={projects[5].github_link}
          image={passwordGenerator}
          concept={projects[5].concept}
          technologies={projects[5].technologies}
        />
        <div className="col mb-4">
        </div>
      </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Portfolio

