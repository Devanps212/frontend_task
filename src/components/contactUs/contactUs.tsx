import './contactUs.css'

const ContactUs = () => {
  return (
    <section className='contact-Us'>
      <div className='worker-img'>
        <img
            src='/others/03eb27c5-6e64-4754-8df5-2ea46bfc3b5e_removalai_preview.png'
            alt='worker-image'
            className='wrkr-img'/>
      </div>
      <div className='contact-form'>
        <div className='form-content'>
            <h1>Request for Callback</h1>
            <h6>Contact us and we will get back to you on your number</h6>
            <form className='form'>
                <div className='input-1'>
                    <input
                        type='text'
                        placeholder='Name'
                        className='input'/>
                    <input
                        type='text'
                        placeholder='Email address'
                        className='input'/>
                </div>
                <div className='input-1'>
                    <input
                        type='number'
                        placeholder='Mobile'
                        className='input'/>
                    <input
                        type='number'
                        placeholder='Pincode'
                        className='input'/>
                </div>
                <div className='input-1'>
                    <select className='input'>
                        <option>Select State</option>
                    </select>
                    <select className='input'>
                        <option>Program Interests</option>
                    </select>
                </div>
                <textarea
                    placeholder='Type message'
                    className='input'
                    rows={5}
                    cols={1}/>
                    <button className='submit-button'>
                        Submit your details
                    </button>
            </form>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
