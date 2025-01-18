import './header.css'
import { FaBars, FaHome, FaPhone } from 'react-icons/fa'

const Header = ()=>{
    return(
        <header className="head">
            <div className='upper'>
                <h4>
                    <FaPhone className='phone'/>
                    <span>011-40848482</span>
                </h4>
                <ul className='item-list'>
                    <li><a href='#'>Blog</a></li>
                    <li><a href='#'>Career</a></li>
                    <li><a href='#'>FAQs</a></li>
                </ul>
            </div>
            <div className='bottom'>
                <div className='company-logo'>
                    <img src='/logo/logo.png' alt='company-logo' className='brand-logo'/>
                </div>
                <nav>
                    <ul className='nav-list'>
                        <li><a className='nav-links' href='#'><FaHome/></a></li>
                        <li><a className='nav-links' href='#'>Courses Offered</a></li>
                        <li><a className='nav-links' href='#'>Join Our Live Classes</a></li>
                        <li><a className='nav-links' href='#'>Free Videos</a></li>
                        <li><a className='nav-links' href='#'>Study Materials</a></li>
                        <li><button className='contact-us'>Contact Us</button></li>
                    </ul>
                </nav>
                <FaBars className='menu-bar'/>
            </div>
        </header>
    )    
}

export default Header