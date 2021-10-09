import React, {useState, useEffect} from 'react'
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../Utilities/ScrollService'
import Animations from '../../Utilities/Animations'
import './Resume.css'

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "Core Java", ratingPercentage: 90},
    { skill: "SQL", ratingPercentage: 90},
    { skill: "Python", ratingPercentage: 88},
    { skill: "Matlab", ratingPercentage: 85},
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "C", ratingPercentage: 75},
    { skill: "CSS", ratingPercentage: 65 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "A Portfolio website to showcase all my details and projects in one place.",
      subHeading: "Technologies Used: React JS, Bootsrap, CSS",
    },
    {
      title: "Wheel chair workout machine",
      duration: { fromDate: "2019", toDate: "2020"},
      description:
        "Team and I worked on the electrical component and graphical user interface of a workout machine for wheelchair users",
      subHeading: "Technologies Used: Python, Javascript, Electronics",
    },
    {
      title: "Simulated thermostat",
      duration: { fromDate: "2019", toDate: "2019" },
      description:
        "Built a cooling/heating thermostat that shows the current temperature and desired temperature",
      subHeading: "Technologies Used: Embedded C, Electronics, Programmable microcontrollers",
    },
    /* add more projects here in the future */
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"University of Texas at Arlington"}
        subHeading={"Bachelor of Science in Electrical Engineering"}
        fromDate={"2017"}
        toDate={"2021"}
      />

      <ResumeHeading
        heading={"National Society of Black Engineers"}
        subHeading={"Academic Excellence Chair"}
        fromDate={"2019"}
        toDate={"2020"}
      />
      <ResumeHeading
        heading={"Electrical Engineering Honor Society, Eta Kappa Nu"}
        subHeading={"Public Relations Chair"}
        fromDate={"2018"}
        toDate={"2020"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Goldman Sachs & Co."}
          subHeading={"Analyst"}
          fromDate={"2020"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
          Currently working as an Analyst in the Global Markets Division at Goldman Sachs
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
          - Assess data from over 500 monthly active clients and devise product marketing strategies resulting
        in improved team eﬃciency.
          </span>
          <br />
          <span className="resume-description-text">
          - Collaborate with sales team to emphasize client behavior using predictive 
        tools to help better client satisfaction.{" "}
          </span>
          <br />
          <span className="resume-description-text">
          - Manage in-house sales and trading software and fix bugs that 
        can expose the firm to compliance risk and threats.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Painting"
        description="Apart from being a tech enthusiast, I also love to paint. I mainly do acrylic painting and fun fact, I painted roughly 80% of all the paintings I currently own."
      />
      <ResumeHeading
        heading="Writing"
        description="Writing gives me a channel to fully express myself. I have a spcial affinity for poetry and I have hopes of being published someday."
      />
      <ResumeHeading
        heading="Ping Pong"
        description="I like to challenge my hand-eye coordination while playing ping pong and also enjoy time spent interacting with my game partner."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;