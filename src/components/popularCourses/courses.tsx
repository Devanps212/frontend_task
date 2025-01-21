import './courses.css'

const Courses = () => {
  return (
    <section className='popular-courses'>
      <div className='course-contents'>
        <div className='course-heading'>
            <h3>Popular courses</h3>
            <div className='next-prev'>
                <button className='prev'>{"<"}</button>
                <button className='next'>{">"}</button>
            </div>
        </div>
        <div className='course-cards'>
            <div className='card'>
                <img
                    src='/public/others/57ca4000d46a08e896094e3646e2ce55.png'
                    alt='course-image'
                    className='card-img'/>
                <h5>THE EARLY BIRDS ACCOUNTANCY CLASS 12 PREMIUM 2023-24</h5>
            </div>
            <div className='card'>
                <img
                    src='/public/others/57ca4000d46a08e896094e3646e2ce55.png'
                    alt='course-image'
                    className='card-img'/>
                <h5>THE EARLY BIRDS ACCOUNTANCY CLASS 12 PREMIUM 2023-24</h5>
            </div>
            <div className='card'>
                <img
                    src='/public/others/57ca4000d46a08e896094e3646e2ce55.png'
                    alt='course-image'
                    className='card-img'/>
                <h5>THE EARLY BIRDS ACCOUNTANCY CLASS 12 PREMIUM 2023-24</h5>
            </div>
            <div className='card'>
                <img
                    src='/public/others/57ca4000d46a08e896094e3646e2ce55.png'
                    alt='course-image'
                    className='card-img'/>
                <h5>THE EARLY BIRDS ACCOUNTANCY CLASS 12 PREMIUM 2023-24</h5>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Courses
