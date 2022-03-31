import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Extra from "./Extra";
import Login from "./Login";
import Signup from "./Signup";

const LoginSignup = () => {
  const userName = localStorage.getItem("name");

  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
  });
  const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    window.location.reload();
  };
  return (
    <>
      <main className="LoginSignup">
        <section className="login">
          <div className="login--wrap clearfix">
            <div className="row clearfix">
              {userName ? (
                <>
                  <div className="col col-12 login--s">
                    <h2>You are Already logged in...</h2>
                    <h2>Do You Want to LogOut</h2>
                    <div className="mt -5 text-end sbmt">
                      <button className="btn btn-primary mr-5" onClick={goBack}>
                        {" "}
                        Go Back
                      </button>
                      <button
                        className="sbmt--btn"
                        type="button"
                        onClick={logoutUser}
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="col col-6 login--l">
                    <Login signupData={signupData} />
                  </div>
                  <div className="col col-6 login--s">
                    <Signup setSignupData={setSignupData} />
                  </div>
                </>
              )}
            </div>
            <div className="login--alt row clearfix">
              <Extra />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default LoginSignup;
