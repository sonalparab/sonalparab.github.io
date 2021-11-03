import React from 'react';
import WorkCard from '../components/WorkCard'
import DatadogLogo from '../images/datadog.png'
import FacebookLogo from '../images/facebook.png'

const Experience = () => {
  return (
    <div>
      <div>
        <WorkCard companyImage={DatadogLogo} companyName="Datadog" position="Software Engineer Intern" location="New York, NY" technologies={["Python", "React", "Typescript"]} />
        <WorkCard companyImage={FacebookLogo} companyName="Facebook" position="Software Engineer Intern" location="Seatle, Washington" technologies={["Hack"]} />
      </div>
    </div>
  );
}

export default Experience;