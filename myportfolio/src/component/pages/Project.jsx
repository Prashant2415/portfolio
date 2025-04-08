import React from 'react'
import "./page.css"
import { PageHeading, ParaText } from '../common/Text'
import { Data } from '../Data'
import { Card } from '../common/card/Card'
import { useNavigate } from 'react-router'
const Project = () => {
  const data = Data;
  const navigate = useNavigate();
  const handleRedirect=(projectItem) =>{
    console.log(projectItem)
    navigate("/projectItem",{state: projectItem})
  }
  return (
    <div className='project-container'>
      <PageHeading>Projects</PageHeading>
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
