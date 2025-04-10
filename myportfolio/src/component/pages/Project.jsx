import React from 'react'
import "./page.css"
import { Data } from '../Data'
import { Card } from '../common/card/Card'
import { useNavigate } from 'react-router'
import { projectImageList } from '../common/SVGImages'
import { BannerText } from '../common/BannerText'
import { ParaText } from '../common/Text'
import {motion} from "framer-motion"
const Project = () => {
  const data = Data;
  const navigate = useNavigate();
  const handleRedirect=(projectItem) =>{
    console.log(projectItem)
    navigate("/projectItem",{state: projectItem})
  }
  const projectsvg = projectImageList;
  window.scrollTo({top: 0, behavior: "smooth"})
  return (
    <div className='project-container'>
      <motion.div 
      initial={{opacity: 0, x: -50}}
      animate={{opacity: 1, x: 0}}
      transition={{duration: 1, ease: "easeOut"}}>
      <BannerText svg={projectsvg} text="Projects"/>
      <ParaText>I love building projects and practice my engineering skills, here's an archive of things that I've worked on.</ParaText>
      <div className="project-card-container">
        {data.projects.map((p)=>(
          <Card data={p} onClickRedirect={handleRedirect}/>
        ))}
      </div>
      </motion.div>
    </div>
  )
}

export default Project
