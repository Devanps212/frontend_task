import './getApp.css';
import Buttons from '../buttons/buttons';

const GetApp = () => {
  return (
    <section className='getApp'>
      <div className='download'>
        <h1>Get the DeeCee App</h1>
        <p>
          Learn from the top faculties along with Rajat Sir <br />
          anytime and anywhere on the DeeCee App
        </p>
        <div className='download-btn'>
          <Buttons/>
        </div>
      </div>
      <div className='mobile-img'>
        <img
          src='/icons/Screenshot__18_-removebg-preview-removebg-preview.png'
          alt='phone-download'
          className='phone-img'
        />
      </div>
    </section>
  );
};

export default GetApp;
