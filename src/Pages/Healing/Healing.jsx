import { group1 } from '../../assets'
import Button from '../../Components/Button/Button'
import './Healing.css'
const Healing = () => {
  return (
    <div className='healing'>
        <div className="container">
            <img src={group1} alt="healing" className="healing-img" />
            <div className="healing-right">
                       <h5 className="healing-title">Covid-19 sanitization</h5>
                       <h1 className='healing-subtitle'>Covid-19 sanitization</h1>
                       <p className="healing-text">
                       Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus.
                       </p>
                       <div className="healing-button">
          <a href="#contact">  <Button/> </a><img src={phone} alt=""  className='healing-image'/>
                    <p className="healing-info">
                        class us now <br />
                        <a href="#" className="healing-anchor"> +998901249484</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Healing