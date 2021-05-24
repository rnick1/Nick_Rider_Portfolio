import React from "react";


function Project(props) {
    return (
      <div className="col mb-4">
      <div className="card h-100">
      <img src={props.image} className="card-img-top" id="recent" alt="Project"></img>
      <section className="card-body">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text"></p>
        <h5>Concept:</h5>
        <p>{props.concept}</p>
        <h5>Technologies used:</h5>
        <p> {props.technologies}</p>
        <a href={props.deployed_link} className="btn btn-dark" target="_blank" rel="noreferrer" id="button">Visit App</a>
        <a href={props.github_link} className="btn btn-dark" target="_blank" rel="noreferrer" id="button">View Repo</a>
      </section>
      </div>
      </div>
    )
}

export default Project