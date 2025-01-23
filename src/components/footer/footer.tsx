import { 
    FaApple, 
    FaFacebookF, 
    FaInstagram, 
    FaLinkedinIn, 
    FaPhoneAlt, 
    FaRegEnvelope, 
    FaYoutube 
} from 'react-icons/fa'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-content'>
            <div className='company-detail'>
                <img
                    src='/logo/b12e2398ba4a5bc748c0465a80a857c6-removebg-preview.png'
                    alt='deecee-logo'
                    className='logo-company'/>
                    <p>As we continue our journey, we remain steadfast in our
                    aspiration to uphold the same unwavering quality in educational content. 
                    DeeCee is not just about imparting knowledge; it's about nurturing a 
                    community of learners and giving back in meaningful ways.</p>
                    <hr/>
                    <h5>Reach out to us</h5>
                    <div className='email-number'>
                        <div className='email'>
                            <FaRegEnvelope className='email-icon'/>
                            <span>support@deeceeline.com</span>
                        </div>
                        <div className='number'>
                            <FaPhoneAlt className='mobile-icon'/>
                            <span>011-40848482</span>
                        </div>
                    </div>
                    <div className='btn-dwnld'>
                        <button className='btn-content-google'>
                            <img
                                src='/icons/logo.png'
                                alt='Google Play Store icon'
                                className='icon-google'
                            />
                            <div>
                                <h5>GET IT ON</h5>
                                <h6>Google Play</h6>
                            </div>
                        </button>
                        <button className='btn-content-apple'>
                            <FaApple size={20} className='icon-apple' />
                            <div>
                                <h5>Download on the</h5>
                                <h6>App Store</h6>
                            </div>
                        </button>
                    </div>
            </div>
            <div className='quick-links'>
                <h4>Quick Links</h4>
                <ul className='link-list'>
                    <li>Home</li>
                    <li>Course Offered</li>
                    <li>Blog</li>
                    <li>Join Our Live Classes</li>
                    <li>Contact Us</li>
                    <li>Free Videos</li>
                    <li>Study Materials</li>
                    <li>Hiring/Careers</li>
                    <li>FAQs</li>
                </ul>
            </div>
            <div className='quick-links'>
                <h4>Our Youtube Channel</h4>
                <ul className='link-list'>
                    <li>Rajat Arora</li>
                    <li>Rajat Arora Talks</li>
                    <li>Rajat Arora Shorts</li>
                    <li>Rajat Arora ISC and State Boards</li>
                    <li>Rajat Arora UG and Professional Courses</li>
                    <li>Rajat Arora CUET and Entrance Exams</li>
                    <li>Rajat Arora TET</li>
                </ul>
            </div>
            <div className='support-findUs'>
                <div>
                    <h4>Help & Support</h4>
                    <ul className='link-list'>
                        <li>Terms of use</li>
                        <li>Site Map</li>
                        <li>Refund Policy</li>
                    </ul>
                </div>
                <div>
                    <h4>Find Us On</h4>
                    <ul className='link-list'>
                        <li className='social-media-icon'><FaYoutube className='youtube-icon'/>Youtube</li>
                        <li className='social-media-icon'><FaInstagram className='instagram-icon'/> Instagram</li>
                        <li className='social-media-icon'><FaFacebookF className='facebook-icon'/> Facebook</li>
                        <li className='social-media-icon'><FaLinkedinIn className='lin-icon'/> Linkedin</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='rights-reserved'>
            <div className='footer-end'>
                <h6>© 2023 deeceeline.com  |   All right reserved</h6>
            </div>
        </div>
    </footer>
  )
}

export default Footer
