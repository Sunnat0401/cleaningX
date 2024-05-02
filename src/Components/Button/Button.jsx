import { useTranslation } from "react-i18next"
import "./Button.css"
const Button = () => {
  const { t, i18n } = useTranslation();
  const language  = localStorage.getItem('i18nextLng')
  const handleChange = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  }
  return (
    <button className="btn" >
      {t("button")}
    </button>
    )
}

export default Button