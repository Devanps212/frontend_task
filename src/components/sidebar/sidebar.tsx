import './sidebar.css';
import { FaTimes } from 'react-icons/fa';

const Sidebar = ({
    isOpen, 
    toggleSidebar 
}: { 
    isOpen: boolean, 
    toggleSidebar: () => void
}) => {
    return (
        <>
            <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <h3>Menu</h3>
                    <FaTimes className="close-btn" onClick={toggleSidebar} />
                </div>
                <ul className="sidebar-list">
                    <li><a className='nav-links' href='#'>Home</a></li>
                    <li><a className='nav-links' href='#'>Courses Offered</a></li>
                    <li><a className='nav-links' href='#'>Join Our Live Classes</a></li>
                    <li><a className='nav-links' href='#'>Free Videos</a></li>
                    <li><a className='nav-links' href='#'>Study Materials</a></li>
                    <li><button className='contact-us'>Contact Us</button></li>
                </ul>
            </aside>

            {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
        </>
    );
};

export default Sidebar;
