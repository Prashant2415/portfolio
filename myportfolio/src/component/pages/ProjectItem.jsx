import React from 'react'
import { Link, useLocation } from "react-router-dom"
import person from "/person.jpg"
import { BannerText } from '../common/BannerText';
import { linkImage, projectImageList } from '../common/SVGImages';
import { PageSubHeading, SubHeading, Text } from '../common/Text';
import {motion} from "framer-motion"
const ProjectItem = () => {
  const location = useLocation();
  const item = location.state;
  console.log(item)
  const projectsvg = projectImageList;

  const { id, name, description, image, siteLink, para } = item;
  const linksvg = linkImage
  window.scrollTo({top: 0, behavior: "smooth"})
  return (
    <div className='particular-project'>
      <motion.div
      initial={{opacity: 0, x: -50}}
      animate={{opacity: 1, x: 0}}
      transition={{duration: 1, ease: "easeOut"}}>
      <BannerText svg={projectsvg} text={name} />
      <img className={`project-item-image ${item.type === "mobile" ? "project-image-contains" : ""}`} src={`${image === "" ? person : `/${image}.png`}`} alt={name} />
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

      </motion.div>
    </div>
  )
}

export default ProjectItem
