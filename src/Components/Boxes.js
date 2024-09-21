import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Boxes = () => {
  return (
    <section className="p-5">
      <div className="row text-center g-4">
        <div className="col-md">
          <div className="card bg-dark text-light">
            <div className="card-body text-center">
              <div className="h1 mb-3">
                <i className="bi bi-laptop"></i>
              </div>
              <h3 className="card-title mb-3">Virtual</h3>
              <p className="card-text ">
                tempor mollit in officia dolore elit ea amet dolor esse aliqua
                id proident exercitation dolor labore ea exercitation enim culpa
                id proident exercitation dolor
              </p>
              <a href="#" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>

        <div className="col-md">
          <div className="card bg-secondary text-light">
            <div className="card-body text-center">
              <div className="h1 mb-3">
                <i className="bi bi-person-square"></i>
              </div>
              <h3 className="card-title mb-3">Hybrid</h3>
              <p className="card-text ">
                tempor mollit in officia dolore elit ea amet dolor esse aliqua
                id proident exercitation dolor labore ea exercitation enim culpa
                id proident exercitation dolor
              </p>
              <a href="#" className="btn btn-dark">
                Read More
              </a>
            </div>
          </div>
        </div>

        <div className="col-md">
          <div className="card bg-dark text-light">
            <div className="card-body text-center">
              <div className="h1 mb-3">
                <i className="bi bi-people"></i>
              </div>
              <h3 className="card-title mb-3">In Person</h3>
              <p className="card-text ">
                tempor mollit in officia dolore elit ea amet dolor esse aliqua
                id proident exercitation dolor labore ea exercitation enim culpa
                id proident exercitation dolor
              </p>
              <a href="#" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Boxes;
