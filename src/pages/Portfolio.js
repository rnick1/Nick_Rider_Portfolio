import React from "react";
import Project from "../components/Project";
import projects from "../projects.json";

function Portfolio() {
  return (
    <div className="container mt-2 mb-2">
    <div className="row">
      <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
      <div className="col-xs-10 col-sm-9 col-md-8 col-lg-7">
        <h2 className="text-center"><b>Portfolio</b></h2>
        <div className="row row-cols-1 row-cols-lg-2">
        <Project
          title={projects[0].title}
          deployed_link={projects[0].deployed_link}
          github_link={projects[0].github_link}
          image={projects[0].image}
        />
        <Project
          title={projects[1].title}
          deployed_link={projects[1].deployed_link}
          github_link={projects[1].github_link}
          image={projects[1].image}
        />
        <Project
          title={projects[2].title}
          deployed_link={projects[2].deployed_link}
          github_link={projects[2].github_link}
          image={projects[2].image}
        />
        <Project
          title={projects[3].title}
          deployed_link={projects[3].deployed_link}
          github_link={projects[3].github_link}
          image={projects[3].image}
        />
                <Project
          title={projects[4].title}
          deployed_link={projects[4].deployed_link}
          github_link={projects[4].github_link}
          image={projects[4].image}
        />
        <Project
          title={projects[5].title}
          deployed_link={projects[5].deployed_link}
          github_link={projects[5].github_link}
          image={projects[5].image}
        />
        <div className="col mb-4">
        </div>
      </div>
      </div>
    </div>
  </div>

  )
}

export default Portfolio

