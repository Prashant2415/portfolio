import React from 'react'
import "./page.css"
import { Data } from '../Data'
import { Card } from '../common/card/Card'
import { useNavigate } from 'react-router'
import { projectImageList } from '../common/SVGImages'
import { BannerText } from '../common/BannerText'
import { ParaText } from '../common/Text'
const Project = () => {
  const data = Data;
  const navigate = useNavigate();
  const handleRedirect=(projectItem) =>{
    console.log(projectItem)
    navigate("/projectItem",{state: projectItem})
  }
  const projectsvg = projectImageList;
  return (
    <div className='project-container'>
      <BannerText svg={projectsvg} text="Projects"/>
      <ParaText>I love building projects and practice my engineering skills, here's an archive of things that I've worked on.</ParaText>
      <div className="project-card-container">
        {data.projects.map((p)=>(
          <Card data={p} onClickRedirect={handleRedirect}/>
        ))}
      </div>
    </div>
  )
}

export default Project
