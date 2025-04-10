import React from 'react'
import "./page.css"
import { PageSubHeading, SubText, Text } from '../common/Text'
import { educationImage, skillImage, starImage } from '../common/SVGImages'
import { BannerText } from '../common/BannerText'
import { Data } from '../Data'
import SkillsCard from '../common/SkillsCard'
import {motion} from "framer-motion"
const Resume = () => {
  const starsvg = starImage;
  const educationsvg = educationImage;
  const resume = Data;
  const skillsvg = skillImage;
  const {technicalSkills} = resume
  window.scrollTo({top: 0, behavior: "smooth"})
  return (
    <div className='resume-container'>
      <motion.div
      initial={{opacity: 0, x: -50}}
      animate={{opacity: 1, x: 0}}
      transition={{duration: 1, ease: "easeOut"}}>
      <PageSubHeading>Resume</PageSubHeading>
      <div className="resume-content">
        <div className="skills-container spaceing">
        <BannerText svg={skillsvg} text="My Skills"/>
        <div className="resume-skills-content">
        <SkillsCard title="Languages" item={technicalSkills.languages}/>
        <SkillsCard title="Frameworks" item={technicalSkills.frameworks}/>
        <SkillsCard title="Tools" item={technicalSkills.tools}/>
        <SkillsCard title="Database" item={technicalSkills.databases}/>
        </div>
        </div>
        <div className="education spaceing">
          <BannerText svg={educationsvg} text="Education" />
          {resume.education.map((ed) => (
            <div className="resume-content-container">
              <div className="time-content">
                <Text className='duration'>{ed.duration}</Text>
                <Text className='location'>{ed.location}</Text>
              </div>
              <div className="content">
                <Text>{ed.institution}</Text>
                <span className='highlightText span-text'>{ed.label === "school" ? ed.board : ed.degree}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="experience spaceing">
          <BannerText svg={starsvg} text="Experience" />
          {resume.experience.map((pr) => (
            <div className="resume-content-container">
              <div className="experience-time-content">
                <Text className='experience-duration'>{pr.duration}</Text>
                <Text className='location'>{pr.location}</Text>
              </div>
              <div className="experience-content">
                <Text>{pr.company}</Text>
                <span className='highlightText'>{pr.title}</span><br />
                <SubText>{pr.project}</SubText>
                <SubText className='gray'>{pr.description}</SubText>
                <SubText>Role: {pr.role}</SubText>
                <div className="responsibility">
                  {pr.responsibilities.map((rs) => (
                    <ul className='rs-ul'>
                      <li className='rs-li'>{rs}</li>
                    </ul>
                  ))}
                </div>


              </div>
            </div>
          ))}
        </div>
      </div>
      </motion.div>
    </div>
  )
}

export default Resume
