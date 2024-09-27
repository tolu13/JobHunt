import React from 'react'
import { About } from './About'
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-section links'>
            <nav>
                <a href={<About />}>About us</a>
                <span className='separator'>|</span>
                <a href="#contact">Contact</a>
                <span className='separator' >|</span>
                <a href="#privacy">Privacy Policy</a>
                <span className='separator' >|</span>
                <a href="#jobs">Job Listings</a>
            </nav>
        </div>
        <div className='footer-section newsletter'>
            <h5 className='text-area'>Stay Updated</h5>
            <form>
                <input type="email" placeholder='email'/>
                <button type='submit' className='submit-btns'>submit</button>
            </form>
            <div className='social-icons'>
                <a href='https://www.linkedin.com/in/tolu-olanrewaju-279102260'><i className='fab fa-linkedin'></i></a>
                <a href='https://www.github.com/tolu13'><i className='fab fa-github'></i></a>
                <a href='mailto:tolulopeolanrewaju8@gmail.com'><i className='fas fa-envelope'></i></a>
                <a href='https://www.instagram.com/slimtolu_'><i className='fab fa-instagram'></i></a>
            </div>
        </div>
        <hr className='border-secondary' />
        <div className='text-center'>
            <p className='mb-0'>&copy; {new Date().getFullYear()} JobHunt. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
