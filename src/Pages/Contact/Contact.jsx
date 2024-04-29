import { phone } from '../../assets'
import Button from '../../Components/Button/Button'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="container">
            <div className="contact-left">
                <h1 className="contact-title">Contact Us</h1>
                <p className="contact-text">In dignissim euismod pretium amet enim a eu nam ut urna accumsan pellentesque lacus duis pharetra eutortor.</p>
                <div className="contact-info">
                    <img src={phone} alt="phone" className='contact-img' />
                    <p className="contact-information">
                        class us now <br />
                        <a href="#" className="contact-anchor"> +998901249484</a>
                    </p>
                </div>
                    <h4 className="contact-subtitle">Not convinced yet?</h4>
                    <p className="contact-lorem">Massa bibendum consectetur maurisid gravida purus, dolor dui amet morbi non nunc urna purus diam.</p>
                    <button className="contact-btn"><a href="$" className="contact-link">Browse our packages</a></button>
            </div>
            <div className="contact-right">
                <form action="" className="contact-form">
                     <div className="form-left">
                        <label htmlFor="">Full name</label>
                        <input className='form-input' type="text" />
                        <label htmlFor="">Adress</label>
                        <input className='form-input' type="text" />
                        <label htmlFor="">Request Services</label>
                        <input className='form-input' type="text" />
                     </div>
                     <div className="form-right">
                     <label htmlFor="phoneNumber">Phone Number</label>
<input id="phoneNumber" className="form-input" placeholder='+ 998 90 124 94 84 ' type="text"  />

                        <label htmlFor="">Email</label>
                        <input className='form-input' type="email" />
                        <label htmlFor="">Day of service</label>
                        <input className='form-input' type="text" />
                     </div>
                </form>
                   <div className="form-bottom">
                      <form action="" className='form-button'>
                              <label htmlFor="">Add a note</label>
                             <textarea className='form-textarea' name="" id="" cols="20" rows="5"></textarea>
                    </form>
                                 <Button/>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Contact