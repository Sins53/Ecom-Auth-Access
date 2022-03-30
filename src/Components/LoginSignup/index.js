import React, { useState } from "react";
import Extra from "./Extra";
import Login from "./Login";
import Signup from "./Signup";

const LoginSignup = () => {
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
  });
  return (
    <>
      <main className="LoginSignup">
        <section className="login">
          <div className="login--wrap clearfix">
            <div className="row clearfix">
              <div className="col col-6 login--l">
                <Login signupData={signupData} />
              </div>
              <div className="col col-6 login--s">
                <Signup setSignupData={setSignupData} />
              </div>
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
