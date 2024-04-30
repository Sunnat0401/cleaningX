import axios from 'axios'
import { phone } from '../../assets'
import Button from '../../Components/Button/Button'
import './Contact.css'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
const Contact = () => {
  const {t} = useTranslation()
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
                <h1 className="contact-title">{t("contact1")}</h1>
                <p className="contact-text">{t("contact2")}</p>
                <div className="contact-info">
                    <img src={phone} alt="phone" className='contact-img' />
                    <p className="contact-information">
                        {t("home3")} <br />
                        <a href="#" className="contact-anchor"> +998901249484</a>
                    </p>
                </div>
                    <h4 className="contact-subtitle">{t("contact3")}</h4>
                    <p className="contact-lorem">{t("contact4")}</p>
                    <button className="contact-btn" ><a href="" className="contact-link">{t("contact5")}</a></button>
            </div>
            <div className="contact-right">
                <form action=""  onSubmit={SendMessage} id='myForm'>
                  <div className="contact-form"> 
                  <div className="form-left">
                        <label htmlFor="">{t("form1")}</label>
                        <input className='form-input' type="text" id='fullName' />
                        <label htmlFor="">{t("form2")}</label>
                        <input className='form-input' type="text" id='adress'/>
                        <label htmlFor="">{t("form3")}</label>
                        <input className='form-input' type="text" id='request'/>
                     </div>
                     <div className="form-right">
                     <label htmlFor="phoneNumber">{t("form4")}</label>
<input id="phoneNumber" className="form-input" placeholder='+ 998 90 124 94 84 ' type="text"  />

                        <label htmlFor="">{t("form5")}</label>
                        <input className='form-input' type="email"  id='email'/>
                        <label htmlFor="">{t("form6")}</label>
                        <input className='form-input' type="text"  id='days'/>
                     </div>
                  </div>
                   <div className="form-bottom form-button ">
                              <label htmlFor="">{t("form7")}</label>
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