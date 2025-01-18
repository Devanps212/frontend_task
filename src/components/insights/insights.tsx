import './insights.css'

const Insights = () => {
  return (
    <section className='insights'>
      <div className='heading'>
        <img
           src='/others/Screenshot__5_-removebg-preview.png'
           alt='student-icon'
           className='student-with-lap'/>
        <h2>
            Students love us. Choose excellence.<br/> 
            Choose success. Choose DeeCee.
        </h2>
      </div>
      <div className='insight-detail'>
        <div className='container views'>
        <h5>Views</h5>
            <span className="views-number">500M</span>
            <span className="views-plus">+</span>
            <span className="views-text"> Views</span>
        </div>
        <div className='container learners'>
        <h5>Happy Learners</h5>
            <span className="views-number">2M</span>
            <span className="views-plus">+</span>
            <span className="views-text"> and Counting</span>
        </div>
        <div className='container watch-time'>
        <h5>Total Classes Watch Time</h5>
            <span className="views-number">1.8M</span>
            <span className="views-plus">+</span>
            <span className="views-text"> Minutes</span>
        </div>
        <div className='container questions'>
        <h5>Questions Solved</h5>
            <span className="views-number">1Lac</span>
            <span className="views-plus">+</span>
        </div>
      </div>
    </section>
  )
}

export default Insights
