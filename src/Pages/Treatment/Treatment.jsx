import { group1, phone } from '../../assets'
import Button from '../../Components/Button/Button'
import './Treatment.css'
const Treatment = () => {
  return (
    <div className='Treatment'>
        <div className="container">
            <img src={group1} alt="Treatment" className="Treatment-img" />
            <div className="Treatment-right">
                       <h5 className="Treatment-title">Covid-19 sanitization</h5>
                       <h1 className='Treatment-subtitle'>We follow guidelines to keep you safe from the COVID-19 virus</h1>
                       <p className="Treatment-text">
                       Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus.
                       </p>
                       <div className="Treatment-button">
                    <Button/> <img src={phone} alt=""  className='Treatment-image'/>
                    <p className="Treatment-info">
                        class us now <br />
                        <a href="#" className="Treatment-anchor"> +998901249484</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Treatment