import axios from 'axios'
import { phone } from '../../assets'
import Button from '../../Components/Button/Button'
import './Contact.css'
import { useState } from 'react'

const Contact = () => {
    const [loading , setLoading] = useState(false)
const SendMessage = ( event) =>{
  setLoading(true)
  event.preventDefault();
  const token = "7150671992:AAEZ5SYAKAlmx_bf9Poj9b6j3wVP6n1tvsg"
  const chat_id =6856618212 ;
  const url = ` https://api.telegram.org/bot${token}/sendMessage`
  const name =document.getElementById("fullName").value
  const adress =document.getElementById("adress").value
  const request =document.getElementById("request").value
  const phoneNumber =document.getElementById("phoneNumber").value
  const email =document.getElementById("email").value
  const days =document.getElementById("days").value
  const addNote =document.getElementById("addNote").value
  const sendMessageContent = `FullName: ${name} \n adress: ${adress} \n request :${request} \nphoneNumber : ${phoneNumber} \n email: ${email} \n days : ${days} addNote : ${addNote} `
  axios({
    url : url ,
    method: 'POST',
    data: {
      "chat_id" : chat_id,
      "text":sendMessageContent
    }
  }).then((res) => {
    if(name.length > 0 && adress.length > 0 && request.length>0 && phoneNumber.length>0 && email.length>0 && days.length > 0 && addNote.length>0){
        alert("Muvaffaqiyatli   ✔")
         document.getElementById("myForm").reset()
    }else{
        alert("  Malumotni tog'ri kiriting  ❌")
    }
  }).catch((err) => {
    console.log("yuborishda xatolik", err)
  }).finally(()=>setLoading(false))
}
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
                <form action=""  onSubmit={SendMessage} id='myForm'>
                  <div className="contact-form"> 
                  <div className="form-left">
                        <label htmlFor="">Full name</label>
                        <input className='form-input' type="text" id='fullName' />
                        <label htmlFor="">Adress</label>
                        <input className='form-input' type="text" id='adress'/>
                        <label htmlFor="">Request Services</label>
                        <input className='form-input' type="text" id='request'/>
                     </div>
                     <div className="form-right">
                     <label htmlFor="phoneNumber">Phone Number</label>
<input id="phoneNumber" className="form-input" placeholder='+ 998 90 124 94 84 ' type="text"  />

                        <label htmlFor="">Email</label>
                        <input className='form-input' type="email"  id='email'/>
                        <label htmlFor="">Day of service</label>
                        <input className='form-input' type="text"  id='days'/>
                     </div>
                  </div>
                   <div className="form-bottom form-button ">
                              <label htmlFor="">Add a note</label>
                             <textarea className='form-textarea' name="" id="addNote" cols="20" rows="5"></textarea>
                                 <Button/>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact