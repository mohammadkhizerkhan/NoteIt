import React from "react";
import { Link } from "react-router-dom";
import { Hero, Logo } from "../assets";

function Landing() {
  return (
    <div>
      <main className="landing-main">
        <Logo />
        <Hero />
        
        <div class="main">
          <div className="main-content text-left">
            <header>
              <h2>
                Do not remember just <span>NOTE IT UP!!!</span>
              </h2>
              <h3>Get your notes, workflow organized in a simple way.</h3>
            </header>
          </div>
          <div className="auth-cont">
            <Link to="/home" className="btn btn-l">
              Join Now
            </Link>
            <a href="" className="btn-link">
              Already have an account
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Landing;
