import React from 'react'
import "./layout.css"
const Footer = () => {
  return (
    <div className='footer-container'>
      <p className='p-tag footer-text'>Designed and Developed by Prashant Mendhe.</p>
      <p className='footer-text'>Build with <span className='highlightText'>React.js</span>. Hosted on <span className='highlightText'>Vercel</span>.</p>
    </div>
  )
}

export default Footer
