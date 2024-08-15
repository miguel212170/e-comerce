import React from 'react'
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer>
      <div className='copyright'>
        Academlo - Miguel Ticona
        &copy; 2024
      </div>
      <div className='social-networks'>
        <a href=''>
          <i className='fa-brands fa-instagram'></i>
        </a>
        <a href=''>
          <i className='fa-brands fa-linkedin'></i>
        </a>
        <a href=''>
          <i className='fa-brands fa-youtube'></i>
        </a>
      </div>
    </footer>
  )
}

export default Footer
