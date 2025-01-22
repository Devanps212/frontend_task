import './app.css'
import Header from './components/header/header'
import Banner from './components/banner/banner'
import Insights from './components/insights/insights'
import Overview from './components/overview/overview'
import JoinUs from './components/joinUs/joinUs'
import StudentTalk from './components/studentsTalk/studentTalk'
import GetApp from './components/getApp/getApp'
import FounderMessage from './components/founderMessage/message'
import ContactUs from './components/contactUs/contactUs'
import Courses from './components/popularCourses/courses'
import Footer from './components/footer/footer'

function App() {

  return (
    <>
    <Header/>
    <Banner/>
    <Insights/>
    <Overview/>
    <JoinUs/>
    <StudentTalk/>
    <GetApp/>
    <FounderMessage/>
    <ContactUs/>
    <Courses/>
    <Footer/>
    </>
  )
}

export default App
