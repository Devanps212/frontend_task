import './overview.css'

const Overview = () => {
  return (
    <section className='over-view'>
        <div className='img-working-student'>
            <img
                src='/others/Screenshot__7_-removebg-preview.png'
                alt='working student'
                className='img-student'/>
        </div>
        <div className='purpose'>
            <h1>Why DeeCee?</h1>
            <div className='para'>
                <p className='para-1'>Since its inception in 2021, DeeCee has been dedicated to guiding students towards
                excellence in their commerce subjects. From humble beginnings in a small room, this 
                initiative by Rajat Sir has flourished into a dynamic educational force, now reaching 
                over 2 million learners through our innovative app and engaging YouTube channels.</p>
                <p className='para-2'>Our commitment to delivering concise and impactful content has propelled countless 
                students to achieve remarkable success in their Class 12 Examinations, securing 
                placements in prestigious universities across the nation. Our streamlined content 
                delivery methodology has paved the way for their achievements.</p>
            </div>
            <div className='btn'>
              <button className='read-more'>Contact Us</button>
            </div>
        </div>
    </section>
  )
}

export default Overview
