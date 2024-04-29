import './App.css'
import About from './Pages/About/About'
import Articles from './Pages/Articles/Articles'
import Contact from './Pages/Contact/Contact'
import Footer from './Pages/Footer/Footer'
import HomePages from './Pages/HomePages/HomePages'
import Services from './Pages/Services/Services'
import Treatment from './Pages/Treatment/Treatment'
import React from "react";
import { createRoot } from 'react-dom/client';
import i18n, { changeLanguage } from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import TranslateEn from './locale/translateEn'
import TranslateUz from './locale/translateUz'

i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: {    translation: TranslateEn  },
      uz: {    translation: TranslateUz  }
    },
    lng: "uz", 
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });



function App() {
  const changeLang =(value) =>{
   changeLanguage(value)
  }
  return (
    <>
       <HomePages changeLang={changeLang}/>
       <About/>
       <Services/>
       <Treatment/>
       <Articles/>
       <Contact/>
       <Footer/>
    </>
  )
}

export default App
