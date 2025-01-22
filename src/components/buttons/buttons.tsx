import './buttons.css'
import { FaApple } from 'react-icons/fa'

const Buttons = () => {
  return (
    <>
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
    </>
  )
}

export default Buttons
