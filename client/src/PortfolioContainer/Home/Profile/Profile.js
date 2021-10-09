import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import ScrollService from "../../../Utilities/ScrollService";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
             <div className="colz-icon">
      
            <a href="mailto:olatejuojeyinka@gmail.com?subject = Feedback&body = Message">
             <i class="fa fa-envelope-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-google-plus-square"></i>
            </a>
            <a href="#">
             <i class="fa fa-github-square"></i>
            </a>
            <a href="www.linkedin.com/in/olateju-ojeyinka-eit-74a863156">
             <i class="fa fa-linkedin-square"></i>
            </a>
               </div>   

          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I am <span className="highlighted-text">Olateju </span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[  
                    "React/React Native 🌐",
                    1000,
                    "Data Analyst 📈",
                    1000,
                    "Software Developer 💻",
                    1000,
                    "Avid Reader",
                    1000,
                    "Enthusiastic Dev 😎",
                    1000,
                  ]}
                />
              </h1>

              <span className='profile-role-tagline'>
                  Interest in building applications with front and back end operations.
                  </span> 
            </span>
          </div>

          <div className="profile-options">
            
              <button className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              > Hire Me</button>
             <a href='Olateju Ojeyinka_resume.pdf' download="Olateju's_resume.pdf">
                 <button className="btn highlighted-btn">Get Resume</button>
             </a>
          </div>
        </div>
        <div className="profile-picture">
             <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
