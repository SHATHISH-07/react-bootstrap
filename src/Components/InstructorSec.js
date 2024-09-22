import React from "react";

const InstructorSec = () => {
  return (
    <section id="instructor" className="p-5 bg-primary">
      <div className="container">
        <h2 className="text-center text-white">Our Instructors</h2>
        <p className="lead text-center text-white mb-5">
          Our instructors all have 5+ years working experience as a web
          developer in the industry
        </p>
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/men/14.jpg"
                  className="rounded-circle mb-3"
                  alt=""
                />
                <h3 className="card-title mb-3">John Doe</h3>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <a href="#">
                  <i className="bi bi-twitter text-dark mx-1"></i>
                </a>
                <a href="#">
                  <i className="bi bi-facebook text-dark mx-1"></i>
                </a>
                <a href="#">
                  <i className="bi bi-linkedin text-dark mx-1"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram text-dark mx-1"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/women/20.jpg"
                  className="rounded-circle mb-3"
                  alt=""
                />
                <h3 className="card-title mb-3">Jane Doe</h3>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <a href="#">
                  <i className="bi bi-twitter text-dark mx-1"></i>
                </a>
                <a href="#">
                  <i className="bi bi-facebook text-dark mx-1"></i>
                </a>
                <a href="#">
                  <i className="bi bi-linkedin text-dark mx-1"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram text-dark mx-1"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/men/20.jpg"
                  className="rounded-circle mb-3"
                  alt=""
                />
                <h3 className="card-title mb-3">John Smith</h3>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <a href="#">
                  <i className="bi bi-twitter text-dark mx-1"></i>
                </a>
                <a href="#">
                  <i className="bi bi-facebook text-dark mx-1"></i>
                </a>
                <a href="#">
                  <i className="bi bi-linkedin text-dark mx-1"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram text-dark mx-1"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/women/10.jpg"
                  className="rounded-circle mb-3"
                  alt=""
                />
                <h3 className="card-title mb-3">Linda</h3>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <a href="#">
                  <i className="bi bi-twitter text-dark mx-1"></i>
                </a>
                <a href="#">
                  <i className="bi bi-facebook text-dark mx-1"></i>
                </a>
                <a href="#">
                  <i className="bi bi-linkedin text-dark mx-1"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram text-dark mx-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSec;
