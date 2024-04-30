import { useTranslation } from 'react-i18next'
import { group1, phone } from '../../assets'
import Button from '../../Components/Button/Button'
import './Treatment.css'
const Treatment = () => {
   const {t}  = useTranslation()
  return (
    <div className='Treatment'>
        <div className="container">
            <img src={group1} alt="Treatment" className="Treatment-img" />
            <div className="Treatment-right">
                       <h5 className="Treatment-title">{t("treatment1")}</h5>
                       <h1 className='Treatment-subtitle'>{t("treatment2")}</h1>
                       <p className="Treatment-text">
                    {t("treatment3")}
                       </p>
                       <div className="Treatment-button">
                    <Button/> <img src={phone} alt=""  className='Treatment-image'/>
                    <p className="Treatment-info">
                        {t("home3")} <br />
                        <a href="#" className="Treatment-anchor"> +998901249484</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Treatment