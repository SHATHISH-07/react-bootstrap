import React from "react";
import ShowcaseImg from "../img/showcase.svg";

const ShowCase = () => {
  return (
    <>
      <section className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1>
                Become a <span className="text-warning">Web Developer</span>
              </h1>
              <p className="lead my-4">
                We focus on teaching our students the fundamentals of the latest
                and greatest technologies to prepare them for their first dev
                role
              </p>
              <button
                className="btn btn-primary btn-lg"
                data-bs-toggle="modal"
                data-bs-target="#enroll"
              >
                Get Started
              </button>
            </div>
            <img
              className="img-fluid w-50 d-none d-sm-block "
              src={ShowcaseImg}
              alt=""
            />
          </div>
        </div>
      </section>

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="enroll"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p className="lead">
                Fill out this form and we will get back to you
              </p>
              <form>
                <div className="mb-3">
                  <label htmlFor="first-name" className="col-form-label">
                    First Name:
                  </label>
                  <input type="text" className="form-control" id="first-name" />
                </div>

                <div className="mb-3">
                  <label htmlFor="last-name" className="col-form-label">
                    Last Name:
                  </label>
                  <input type="text" className="form-control" id="last-name" />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="col-form-label">
                    Email:
                  </label>
                  <input type="email" className="form-control" id="email" />
                </div>

                <div className="mb-3">
                  <label htmlFor="phone" className="col-form-label">
                    Phone No:
                  </label>
                  <input type="tel" className="form-control" id="Phone" />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowCase;
