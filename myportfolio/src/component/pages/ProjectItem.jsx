import React from 'react'
import { Link, useLocation } from "react-router-dom"
import person from "/person.jpg"
import { BannerText } from '../common/BannerText';
import { linkImage, projectImageList } from '../common/SVGImages';
import { PageSubHeading, SubHeading, Text } from '../common/Text';
const ProjectItem = () => {
  const location = useLocation();
  const item = location.state;
  console.log(item)
  const projectsvg = projectImageList;

  // const dummy ={
  //       "id": 1,
  //       "name": "To do list",
  //       "description": "Welcome to to do list application",
  //       "image": "",
  //       "siteLink": "",
  //       "technologies": ["JavaScript", "React", "Redux"],
  //       "para": [
  //         {
  //           "id": 1,
  //           "title": "Overview",
  //           "text": "Welcome to to do list application",
  //           "isList": "false",
  //           "list": null
  //         },
  //         {
  //           "id": 2,
  //           "title": "Project Goal",
  //           "text": "Welcome to to do list application",
  //           "isList": "false",
  //           "list": null
  //         },
  //         {
  //           "id": 3,
  //           "title": "Tech Stack",
  //           "text": "Welcome to to do list application",
  //           "isList": "true",
  //           "list": ["JavaScript", "React", "Redux"]
  //         }
  //       ]
  //     }
  const { id, name, description, image, siteLink, para } = item;
  const linksvg = linkImage

  return (
    <div className='particular-project'>
      <BannerText svg={projectsvg} text={name} />
      <img className='project-item-image' src={person} alt="person" />
      <SubHeading>Description</SubHeading>
      <Text>{description}</Text>
      <div className="live-site">
        {linksvg}
        <Link to={siteLink} target='_blank' className='highlightText site'>Live Site</Link>
      </div>
      <div className="project-description-container">
        {para.map((p) => (
          <div className="para-content-container" key={p.id}>
            <PageSubHeading>{p.title}</PageSubHeading>
            <Text className='para-content-text'>{p.text}</Text>
            {p.isList === "true" && (
              p.list.map((li)=>(
                <ul className='list-ul'>
                  <li className='list-li'>{li}</li>
                </ul>
              ))
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectItem
