import React from "react";
import ReactSvg from "../img/react.svg";

const SecondLearn = () => {
  return (
    <section className="p-5 bg-dark text-light" id="learn">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md p-5">
            <h2>Learn React</h2>
            <p>
              tempor mollit in officia dolore elit ea amet dolor esse aliqua id
              proident exercitation dolor labore ea exercitation enim culpa id
              proident exercitation dolor
            </p>
            <p>
              tempor mollit in officia dolore elit ea amet dolor esse aliqua id
              proident exercitation dolor labore ea exercitation enim culpa id
              proident exercitation dolor
            </p>
            <a href="#" className="btn btn-light mt-3">
              <i className="bi bi-chevron-right"></i>Read More
            </a>
          </div>
          <div className="col-md">
            <img className="img-fluid" src={ReactSvg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondLearn;
