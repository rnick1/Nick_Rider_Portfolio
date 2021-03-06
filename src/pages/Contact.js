import React from "react";
import contactPage from "../images/contactPage.JPG";
import background4 from "../images/background4.JPG";

// backgroundColor: 'transparent'
function Contact() {
  return (
    <div style={{ backgroundImage: `url(${background4})` }}>
      <div class="container">
        <div class="row-A"></div>
        <br />
        <div class="row-A">
          <div class="col-xs-1 col-md-3 col-lg-3"></div>
          <div
            style={{ backgroundColor: "transparent" }}
            class="col-xs-10 col-md-6 col-lg-6"
          >
            <div class="card-contact">
              <div class="row no-gutters">
                <section class="card-body text-center">
                  <h2 class="card-title mb-1">Contact Me</h2>
                  <p>
                    <img
                      src={contactPage}
                      class="contact-img img-thumbnail rounded mx-auto d-block mb-3"
                      alt="Nick"
                    ></img>
                    <a
                      href="https://linkedin.com/in/nicholas-rider1"
                      class="btn btn-dark"
                      target="_blank"
                      rel="noreferrer"
                      id="button"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/rnick1"
                      class="btn btn-dark"
                      target="_blank"
                      rel="noreferrer"
                      id="button"
                    >
                      GitHub
                    </a>
                    <a
                      href="mailto:rnick0260@gmail.com"
                      class="btn btn-dark"
                      target="_blank"
                      rel="noreferrer"
                      id="button"
                    >
                      Email
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://drive.google.com/file/d/1UCLD1yxTbRwNwG6732JTQJhwNvI21fa3/view?usp=sharing"
                      class="btn btn-dark"
                      target="_blank"
                      rel="noreferrer"
                      id="button"
                    >
                      Resume
                    </a>
                  </p>
                </section>
              </div>
            </div>
          </div>
          <div class="col-xs-1 col-md-3 col-lg-3"></div>
        </div>
        <div class="row-tall"></div>
      </div>
    </div>
  );
}

export default Contact;
