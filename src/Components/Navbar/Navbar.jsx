import { useTranslation } from 'react-i18next'
import { logo } from '../../assets'
import Button from '../Button/Button'
import './Navbar.css'
const Navbar = ({changeLang}) => {
  const changaeHandler = (e) =>{
    changeLang(e.target.value);
  }
  const {t} = useTranslation()
  return (
    <div className='navbar'>
        <div className="container">
            <img src={logo} alt=""Logo className='nav-logo' />
            <ul className="nav-lists">
                <li className="nav-list"><a href="#" className="nav-link">{t("main")}</a></li>
                <li className="nav-list"><a href="#" className="nav-link">{t("about")}</a></li>
                <li className="nav-list"><a href="#" className="nav-link">{t("services")}</a></li>
                <li className="nav-list"><a href="#" className="nav-link">{t("projects")}</a></li>
                <li className="nav-list"><a href="#" className="nav-link">{t("contact")}</a></li>
            </ul>
            <select name="" id="" className="nav-select" onClick={changaeHandler}>
                <option value="uz">Uz</option>
                <option value="en">En</option>
            </select>
            <Button/>
        </div>
    </div>
  )
}

export default Navbar