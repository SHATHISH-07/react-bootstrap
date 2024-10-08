import React from "react";
import MapImg from "../img/mapimg.png";

const Contact = () => {
  return (
    <section className="p-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md">
            <h2 className="text-center mb-4">Contact Info</h2>
            <ul className="list-group list-group-flush lead">
              <li className="list-group-item">
                <span className="fw-bold">Main Location</span> 50 Main st Boston
                MA
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Enrollment Phone:</span> (555)
                555-5555
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Student Phone:</span> (333) 333-3333
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Enrollment Email</span>{" "}
                enrole123@gmail.com
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Student Email</span>{" "}
                student123@gmail.com
              </li>
            </ul>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img src={MapImg} className="img-fluid rounded" alt="Map" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
