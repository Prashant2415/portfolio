import React from 'react'
import "./layout.css"
const Footer = () => {
  const handleScrollTop=()=>{
    window.scrollTo({top: 0, behavior: "smooth"})
  }
  return (
    <div className='footer-container'>
      <button className='scroll-top-button' onClick={handleScrollTop}>Click here to Scroll To Top</button>
      <p className='p-tag footer-text'>Designed and Developed by Prashant Mendhe.</p>
      <p className='footer-text'>Build with <span className='highlightText'>React.js</span></p>
    </div>
  )
}

export default Footer
