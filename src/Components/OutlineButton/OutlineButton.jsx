import { useTranslation } from 'react-i18next'
import './OutlineButton.css'
const OutlineButton = () => {
  const {t} = useTranslation()
  return (
    <button className='about-btn'>{t("outlineBtn")}</button>
  )
}

export default OutlineButton