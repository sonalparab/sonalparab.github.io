import React from 'react';
import WorkCard from '../components/WorkCard'
import DatadogLogo from '../images/DatadogLogo.png'
import FacebookLogo from '../images/FacebookLogo.png'
import JohnsonLogo from '../images/JohnsonLogo.jpeg'

const Experience = () => {
  return (
    <div>
      <div>
        <WorkCard companyImage={DatadogLogo} companyName="Datadog" position="Software Engineer Intern"
          location="New York, NY" technologies={["Python", "React", "Typescript", "Git"]}
          description="At Datadog, I worked on creating tools to help customers access their historical Datadog usage, by creating a month selector to allow uers see their usage of services in previous months and access their recent statements within the Datadog App. I also implementing an estimated month to date cost display so users could see how much their current month's usage might cost them."
        />
        <WorkCard companyImage={FacebookLogo} companyName="Facebook" position="Software Engineer Intern"
          location="Seattle, Washington" technologies={["Hack"]}
          description="At Facebook, I worked on a project to increase user's awareness of Facebook features by adding feature recommendations to users' News Feed."
        />
        <WorkCard companyImage={JohnsonLogo} companyName="Cornell SC Johnson College of Business"
          position="Computing Assistant" location="Ithaca, NY" technologies={["Bash", "Python", "SAS"]}
          description="For the JCB IT Department, I create Bash scripts to update and maintain over 40 financial datasets that are used in faculty and student research. I also create Python and SAS scripts to help users extract the data they need from the large datasets."
        />
      </div>
    </div>
  );
}

export default Experience;