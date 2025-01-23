import { useEffect, useState } from 'react';
import './header.css'
import { FaBars, FaHome, FaPhone } from 'react-icons/fa'
import Sidebar from '../sidebar/sidebar';

const Header = ()=>{
    const [isFixed, setIsFixed] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);


    useEffect(() => {
        const headerElement = document.querySelector('.head') as HTMLElement | null
        if(!headerElement){
            console.error("Header element not found")
            return
        }

        const headerHeight = headerElement.offsetHeight
        const handleScroll = () => {
            if(window.scrollY > headerHeight){
                setIsFixed(true)
            }else{
                setIsFixed(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const toggleSidebar = ()=>{
        setIsSidebarOpen(!isSidebarOpen);
    }
    
    return(
        <>
        <header className={`head ${isFixed ? 'fixed' : ''}`}>
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
                <FaBars className='menu-bar' onClick={toggleSidebar}/>
            </div>
        </header>

        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </>
    )    
}

export default Header