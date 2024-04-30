import { useTranslation } from 'react-i18next'
import { logo } from '../../assets'
import Button from '../Button/Button'
import './Navbar.css'
const Navbar = ({changeLang}) => {
  const { t, i18n } = useTranslation();
  const language  = localStorage.getItem('i18nextLng')
  const handleChange = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  }
  return (
    <div className='navbar'>
        <div className="container">
            <img src={logo} alt=""Logo className='nav-logo' />
            <ul className="nav-lists">
                <li className="nav-list"><a href="#" className="nav-link">{t("home")}</a></li>
                <li className="nav-list"><a href="#" className="nav-link">{t("about")}</a></li>
                <li className="nav-list"><a href="#" className="nav-link">{t("service")}</a></li>
                <li className="nav-list"><a href="#" className="nav-link">{t("articles")}</a></li>
                <li className="nav-list"><a href="#" className="nav-link">{t("contact")}</a></li>
            </ul>
            <select name="" id="" className="nav-select" onClick={handleChange}>
                <option value="uz">Uz</option>
                <option value="en">En</option>
            </select>
            <Button/>
        </div>
    </div>
  )
}

export default Navbar