import { FaCheckCircle } from 'react-icons/fa'
import './banner.css'

const Banner = () => {
  return (
    <section className="banner">
        <div className='details'>
            <h4>Premium Course</h4>
            <h2>THE EARLY BIRDS BATCH</h2>
            <div style={{marginTop:"5px"}}>
                <h5>CLASS - 12, SESSION 2023 - 24</h5>
                <h1>ACCOUNTANCY</h1>
            </div>
            <div className='features'>
                <div className='features-group'>
                    <p className='feature-item'><FaCheckCircle className='feature-icon'/> Complete Syllabus</p>
                    <p className='feature-item'><FaCheckCircle className='feature-icon'/> Revision</p>
                    <p className='feature-item'><FaCheckCircle className='feature-icon'/> Doubt Support</p>
                </div>
                <div className='features-group'>
                    <p className='feature-item'><FaCheckCircle className='feature-icon'/> Test Series</p>
                    <p className='feature-item'><FaCheckCircle className='feature-icon'/> PDF Notes</p>
                </div>
            </div>
        </div>
        <div className='banner-image'>
            <img
                src='/others/bce0b964101030f9f3f41487f32e8956.png'
                alt='student'
                className='student'/>
        </div>
    </section>
  )
}

export default Banner
