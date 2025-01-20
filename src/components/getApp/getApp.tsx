import { FaApple } from 'react-icons/fa';
import './getApp.css';

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
          <button className='btn-content-1'>
            <img
              src='/icons/logo.png'
              alt='google playstore icon'
              className='playstore-icon'
            />
            <div>
              <h5>GET IT ON</h5>
              <h6>Google Play</h6>
            </div>
          </button>
          <button className='btn-content-2'>
            <FaApple size={36} className='apple-icon' />
            <div>
              <h5>Download on the</h5>
              <h6>App Store</h6>
            </div>
          </button>
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
