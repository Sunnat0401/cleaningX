import { useTranslation } from 'react-i18next'
import { logo } from '../../assets'
import Button from '../Button/Button'
import './Navbar.css'
import Hamburger from '../Hamburger/Hamburger'
const Navbar = () => {
  const { t, i18n } = useTranslation();
  const language  = localStorage.getItem('i18nextLng')
  const handleChange = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  }
  return (
    <div className='navbar'>
        <div className="container">
            <img src={logo} alt="Logo" className='nav-logo' />
            <ul className="nav-lists">
                <li className="nav-list"><a href="#" className="nav-link">{t("home")}</a></li>
                <li className="nav-list"><a href="#about" className="nav-link">{t("about")}</a></li>
                <li className="nav-list"><a href="#service" className="nav-link">{t("service")}</a></li>
                <li className="nav-list"><a href="#article" className="nav-link">{t("articles")}</a></li>
                <li className="nav-list"><a href="#contact" className="nav-link">{t("contact")}</a></li>
            </ul>
            <select name="" id="" className="nav-select" onClick={handleChange}>
                <option value="en">En</option>
                <option value="uz">Uz</option>
            </select>
          <span className='nav-btn'><a href="#contact"><Button/></a></span>
            <div className="hamburger">
                              {/* <TemporaryDrawer changeLanguages={changeLanguages}  /> */}
                              <Hamburger/>
                    {/* <img src="/public/icon.svg" alt="hamburger " /> */}
                    </div>
        </div>
    </div>
  )
}

export default Navbar