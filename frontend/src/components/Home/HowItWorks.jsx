import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How JobSphere Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus style={{ backgroundColor: '#FFA500', color: '#fff' }}/>
              <p>Create Account</p>
              <p>
                Fill out the registration form
              </p>
            </div>
            <div className="card">
              <MdFindInPage style={{ backgroundColor: '#FFA500', color: '#fff' }}/>
              <p>Find a Job/Post a Job</p>
              <p>
                Find a job that suits your skills or post a job that suits your
              </p>
            </div>
            <div className="card">
              <IoMdSend style={{ backgroundColor: '#FFA500', color: '#fff' }}/>
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>
                Apply and get chance to work with your dream company or recruit
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
