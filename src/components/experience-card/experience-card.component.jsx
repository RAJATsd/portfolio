import "./experience-card.styles.css";
import React from "react";
import hoverHand from '../../assets/hover-icon.jpg';

const ExperienceCardComponent = ({ experienceDetails }) => {
  const calculateDuration = () => {
    const endingYear = experienceDetails.isCurrentCompany
      ? new Date().getFullYear()
      : experienceDetails.leavingYear;
    const endingMonth = experienceDetails.isCurrentCompany
      ? new Date().getMonth() + 1
      : experienceDetails.leavingMonth;
    const startingYear = experienceDetails.joiningYear;
    const startingMonth = experienceDetails.joiningMonth;

    let noOfMonthsFromYears = (endingYear - startingYear) * 12;
    if(endingMonth < startingMonth) {
      noOfMonthsFromYears -= 12;
    }

    const noOfMonthsFromMonthsCalc =
      endingMonth >= startingMonth
        ? endingMonth - startingMonth + 1
        : 13 + endingMonth - startingMonth;

    const totalNoOfMonths = noOfMonthsFromYears + noOfMonthsFromMonthsCalc
    return [totalNoOfMonths % 12, Math.floor(totalNoOfMonths / 12)];
  };

  const [months, years] = calculateDuration();

  return (
    <div className="experience-card-container">
      <img src={hoverHand} alt="hover" className="hover-hand" />
      <div style={{ display: "flex" }}>
        <div className="card-main-image-holder">
          <img
            src={experienceDetails.companyImage}
            alt="company-pic"
            className="experience-company-image"
          />
        </div>
        <div className="card-main-info-holder">
          <div className="company-name-and-profile">
            <h3 className="company-name">{experienceDetails.companyName}</h3>
            <span className="job-profile">{experienceDetails.profileName}</span>
          </div>
          <div className="duration-and-start-end">
            <div className="start-and-end-date">
              <span>
                {experienceDetails.joiningMonth}/{experienceDetails.joiningYear}
              </span>
              -
              {experienceDetails.isCurrentCompany ? (
                <span>present</span>
              ) : (
                <span>
                  {experienceDetails.leavingMonth}/
                  {experienceDetails.leavingYear}
                </span>
              )}
            </div>
            <div className="duration">Duration : {years} years {months} months</div>
          </div>
          <div className="technology-tags-holder">
            {experienceDetails.technologiesUsed.map((singleTech) => (
              <span key={singleTech} className="tech-tag">
                {singleTech}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="roles-responsibilies-container">
        <h2 className="roles-and-resp-heading">Roles And Responsibilies <a href={experienceDetails.websiteLink}>(Go To Website)</a></h2>
        <div className="r-and-r-list">
          <ul className="r-and-r-unordered-list-container">
            {experienceDetails.rolesAndReponsibilities.map((singleRAndR) => (
              <li key={singleRAndR} className="r-and-r-element">
                {singleRAndR}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCardComponent;
