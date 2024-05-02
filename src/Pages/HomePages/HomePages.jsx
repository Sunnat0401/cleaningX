import { useTranslation } from 'react-i18next'
import { navbar1, phone } from '../../assets'
import Button from '../../Components/Button/Button'
import Navbar from '../../Components/Navbar/Navbar'
import './HomePages.css'
const HomePages = () => {
  const { t, i18n } = useTranslation()
  return (
    <div className='home-pages'>
        <Navbar/>
        <div className="flex container">
            <div className="home-left">
                <h1 className="home-title">{t("home1")}</h1>
                <p className="home-text">{t("home2")}</p>
                <div className="home-button">
              <a href="#contact">  <Button/> </a><img src={phone} alt=""  className='button-img'/>
                    <p className="button-subtitle">
                      {t("home3")} <br />
                        <a href="#" className="button-anchor"> +998901249484</a>
                    </p>
                </div>
            </div>
          <img src={navbar1} alt="" className="home-right" />
        </div>
    </div>
  )
}

export default HomePages