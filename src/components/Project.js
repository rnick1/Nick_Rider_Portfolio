import React from "react";


function Project(props) {
    return (
      <div className="col mb-4">
      <div className="card h-100">
      <img src={props.image} className="card-img-top" id="recent" alt="Project"></img>
      <section className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">   </p>
        <a href={props.deployed_link} className="btn btn-dark" target="_blank" rel="noreferrer" id="button">Recent Work</a>
        <a href={props.github_link} className="btn btn-dark" target="_blank" rel="noreferrer" id="button">View Repo</a>
      </section>
      </div>
      </div>
    )
}

export default Project