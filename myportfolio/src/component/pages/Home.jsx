import React from 'react'
import "./page.css"
import { ButtonText } from '../common/Button'
import { BannerText } from '../common/BannerText'
import person from "/person.jpg"
import { Data } from '../Data'
import { aboutImage, emailImage, fileImage, githubImage, linkedInImage, projectImage, redirectImage, skillImage } from '../common/SVGImages'
import { HighlightLink, ParaText } from '../common/Text'
import { SiJavascript, SiReact, SiRedux } from "react-icons/si"
import { Card } from '../common/card/Card'
import { Common } from '../common/Common'
import {Link, useNavigate} from "react-router-dom"
import SkillsCard from '../common/SkillsCard'
import profile from "/profile.jpg"
import profiletwo from "/profiletwo.jpg"
import profilethree from "/profilethree.png"
const Home = () => {

  const data = Data;
  const { name, title, summary, email, linkedin, github, aboutMe, projects, technicalSkills } = data;

  const highlightedTextData = ["passionate Full Stack JavaScript Developer", "3 years of experience", "dynamic, responsive, and scalable web applications", "front-end development"]

  const githubsvg = githubImage;
  const linkedinsvg = linkedInImage;
  const emailsvg = emailImage;
  const aboutussvg = aboutImage;
  const projectsvg = projectImage;
  const redirectsvg = redirectImage;
  const filesvg = fileImage;
  const skillsvg = skillImage;

  const navigate = useNavigate();

  const highlightText = (text, highlights) => {
    const regex = new RegExp(`(${highlights.join("|")})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, index) =>
      highlights.some(h => h.toLowerCase() === part.toLowerCase()) ? (
        <span key={index} className="highlightText"><strong>{part}</strong></span>
      ) : (
        part
      )
    );
  };

  const handleRedirect=(projectData)=>{
    console.log(projectData)
    navigate("/projectItem",{state: projectData})
  }

  const handleScroll=()=>{
    window.scrollTo({top: 0, behavior: "smooth"})
  }

  return (
    <div className='home-container'>
      <section className='greeting-container'>
        <p className='greeting'>Hey there!, I'm</p>
        <h2 className='name'>{name}</h2>
        <h2 className='designation'>{title}.&nbsp;<span className='designation-para'>A self-taught developer with an
          interest in Computer Science.</span></h2>
        <p className='summary'>{summary}</p>
        <div className="contact-link-container">
          <ButtonText svg={githubsvg} title="Github" link={Common.GITHUB}/>
          <ButtonText svg={linkedinsvg} title="LinkedIn" link={Common.LINKEDIN}/>
          <ButtonText svg={emailsvg} title="Email" link={Common.EMAIL}/>
          <ButtonText svg={filesvg} title="Resume" link={Common.RESUME}/>
        </div>
      </section>
      <section className="section-container aboutus-container">
        <BannerText svg={aboutussvg} text="About Me" />
        <div className="aboutus-content-container">
          <div className="aboutus-content">
            {aboutMe.map((para, i) => (
              <p key={i} className="aboutus-text">
                {highlightText(para, highlightedTextData)}
              </p>
            ))}
          </div>
          <img className='aboutus-image' src={profilethree} alt="Profile" />
          
        </div>
      </section>
      <section className='section-container skills-container'>
        <BannerText svg={skillsvg} text="My Skills"/>
        <div className="skill-content">
        <SkillsCard title="Languages" item={technicalSkills.languages}/>
        <SkillsCard title="Frameworks" item={technicalSkills.frameworks}/>
        <SkillsCard title="Tools" item={technicalSkills.tools}/>
        <SkillsCard title="Database" item={technicalSkills.databases}/>
        </div>
      </section>
      <section className='section-container project-section'>
        <BannerText svg={projectsvg} text="All Creative Works" />
        <ParaText>Here's some of my projects that I have worked on.</ParaText>
        <Link className="highlightText link-text" to="/project">Explore more →</Link>
        <div className="project-section-container">
          <div className="project">
            {projects.map((p)=>(
              <Card data={p} onClickRedirect={handleRedirect}/>
            ))}
          </div>
        </div>
      </section>
      <section className='section-container in-touch-container'>
        <h2 className='in-touch-text'>Keep In Touch.</h2>
        <p className='in-touch-para'>I'm currently specializing in <span className='highlightText'>Full Stack JavaScript Development</span>.</p>
        <p className='in-touch-para'>Feel free to get in touch and talk more about your projects.</p>
        <div className="in-touch-link-container">
          <ButtonText svg={linkedinsvg} title="LinkedIn" link={Common.LINKEDIN}/>
          <ButtonText svg={emailsvg} title="Email" link={Common.EMAIL}/>
          <ButtonText svg={filesvg} title="Resume" link={Common.RESUME}/>
        </div>
      </section>
      <div className="scroll-top">
        <button className='scroll-up' onClick={handleScroll}>Scroll Up</button>
      </div>
    </div>
  )
}

export default Home
