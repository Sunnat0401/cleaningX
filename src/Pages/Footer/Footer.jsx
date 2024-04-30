import { useTranslation } from 'react-i18next'
import { logo } from '../../assets'
import Button from '../../Components/Button/Button'
import './Footer.css'
const Footer = () => {
    const {t} = useTranslation()
  return (
    <div className='footer'>
        <div className="container">
            <div className="footer-top">
                <div className="footer-info">
                    <h4 className="footer-title">{t("footer1")}</h4>
                    <p className="footer-text">{t("footer2")}</p>
                </div>
                <div className="footer-connect">
                    <h5 className="footer-subtitle">
                        Contact us
                    </h5>
                    <p className="footer-location">
                    1827 Nickel Road, Los Angeles, CA, 90017, United States
                    </p>
                    <p className="footer-location">
                    (414) 567 - 2109
                    </p>
                    <a href="  contact@cleaning.com" className="footer-link">
                    contact@cleaning.com
                    </a>
                </div>
                <div className="footer-hours">
                    <h5 className="footer-hour">
                        Hours
                    </h5>
                    <h5 className="footer-hour">
                    Monday to Friday
                    </h5>
                    <p className="footer-location">
                    6:00 AM - 9:00 PM
                    </p>
                    <h5 className="footer-hour">
                    Saturday & Sunday
                    </h5>
                    <p className="footer-location">
                    8:00 AM - 8:00 PM
                    </p>
                </div>
                <div className="footer-data">
                <h5 className="footer-subtitle">
                Get a free estimate
                    </h5>
                    <p className='footer-phone'><a href="tel(+ 998 ) 90-124-94-84" className="footer-link">(+ 998 ) 90-124-94-84</a></p>
                    <p className="footer-location">
                    Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do eiusmod.
                    </p>
                    <Button/>
                </div>
            </div>
            <div className="footer-bottom">
                <img src={logo} alt="logo" />
                <ul className="footer-lists">
                    <li className="footer-lists">
                    Copyright © Cleaning X | Designed byBRIX Templates - Powered by Webflow Licenses
                    </li>

                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer