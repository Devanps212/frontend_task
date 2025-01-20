import { FaArrowLeft } from 'react-icons/fa6'
import './studentTalk.css'
import { FaArrowRight } from 'react-icons/fa'

const StudentTalk = () => {
  return (
    <section className='talks'>
        <h1 className='talks-head'>What our students say</h1>
        <h6 className='sub-heading'>Through the Words of Our Community.</h6>
        <div className='talks-container'>
            <div className='contain contain-1'>
                <p>“Sir when I watch your video I get <br/>
                 attached to you. Sir your <br/>
                 explanation of chapter are so <br/>
                 amazing.”</p>
                 <h4>Jai Shankar Jha</h4>
            </div>
            <div className='contain contain-1'>
                <p>“Rajat sir you are a really great <br/>
                 personality. I admire you alot. Be it <br/> 
                 teaching or normal guidance, you <br/> 
                 give your 200% to help us and we <br/> 
                 have a special bond.”</p>
                 <h4>Divyansh Gupta</h4>
            </div>
            <div className='contain contain-1'>
                <p>“No words can express my <br/>
                 gratitude to you sir. I have never <br/> 
                 seen any teacher so sweet and <br/> 
                 kind hearted like you. I always <br/> 
                 pray to God to keep you healthy <br/> 
                 you. Love you. You are the best.”</p>
                 <h4>Komal Bhatt</h4>
            </div>
        </div>
        <div className='slider'>
            <FaArrowLeft className='arrow-left'/>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot dot-active'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <FaArrowRight className='arrow-right'/>
        </div>
    </section>
  )
}

export default StudentTalk
