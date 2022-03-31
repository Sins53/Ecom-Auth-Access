import React from "react";
import pic from "../../../assets/images/profile-pic.jpg";

const Promotions = (props) => {
  const { darkMode } = props;
  var a = "light";
  if (darkMode) {
    a = "dark";
  } else {
    a = "light";
  }
  return (
    <div className="container">
      <h2 className="text-primary">Active Promotions</h2>
      <div className="mt-5 row">
        <div className="col-3">
          <div className={`card p-3 bg-${a}`}>
            <img src={pic} alt="alt" width="100%" height="300" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className={`card p-3 bg-${a}`}>
            <img src={pic} alt="alt" width="100%" height="300" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className={`card p-3 bg-${a}`}>
            <img src={pic} alt="alt" width="100%" height="300" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className={`card p-3 bg-${a}`}>
            <img src={pic} alt="alt" width="100%" height="300" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
