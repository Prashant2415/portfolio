import React from 'react'
import "./common.css"
const SkillsCard = ({title, item}) => {
  return (
    <div className='skill-card'>
      <h2 className='skill-title'>{title}</h2>
        <ul className='skill-ul'>
            {item.map((i,index)=>(
                <li className='skill-li' key={index}>{i}</li>
            ))}
        </ul>
    </div>
  )
}

export default SkillsCard
