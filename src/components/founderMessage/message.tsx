import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import './message.css'

const FouderMessage = () => {
  return (
    <section className='message-section'>
      <div className='message'>
        <h1>Message from the Founder</h1>
        <div className='msg-para'>
          <p>I am humbled and overjoyed to stand here today, reflecting on the remarkable journey that has <br/>
          brought us from a humble beginning to a soaring pinnacle. Our story began in 2014, with a single <br/> 
          student, a flicker of passion, and a dream to transform education. From that small room in my house, <br/> 
          DeeCee took its first step, fueled by determination and a belief in the power of learning.
          </p>
          <p>As I reminisce about those early days, I am reminded of the challenges we faced, the late nights spent <br/> 
          refining our vision, and the unwavering dedication of our team. Every obstacle we encountered was <br/> 
          met with resilience, every setback met with renewed determination. It was a journey of passion, <br/> 
          innovation, and a commitment to pushing boundaries.
          </p>
          <div className='actions'>
            <button className='readMore'>Read more</button>
            <div className='socials'>
              <div className='insta-icon'>
                <FaInstagram className='insta' size={30}/>
              </div>
              <div className='linkedin-icon'>
                <FaLinkedinIn className='linkedin' size={30}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="founder-container">
          <div className="founder-img">
            <div className="img-background">
              <img
                  src="/founder/6d60c3fd9b7b6e8bbe85a12bba48d4c1.jpeg"
                  alt="founder-image"
                  className="fondr-image"/>
            </div>
          </div>
        <div className="speech-bubble top-left"></div>
      <div className="speech-bubble bottom-right"></div>
    </div>
    </section>
  )
}

export default FouderMessage
