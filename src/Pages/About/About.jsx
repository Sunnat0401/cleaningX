import { useTranslation } from 'react-i18next';
import Button from '../../Components/Button/Button';
import OutlineButton from '../../Components/OutlineButton/OutlineButton';
import './About.css'
import { useEffect, useState } from "react";

function About() {
      const { t, i18n } = useTranslation()
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=4265d9a047b0459ebb6406af9fadedd8")
            .then((res) => res.json())
            .then((items) => {
                const threeItems = items?.articles.slice(0,3);
                setData(threeItems);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="wrapper">
            <div class="loader"></div> 
        </div>
    }
    if (!data || data.length === 0) {
        return <p className='loader-text'>Error: information is not coming from the api</p>;
    }

    return (
      <div className='about'>
          <div className="container">
                  
          <div className="about-title">
          <h1 >{t("about1")}</h1>
          <h4 className='about-subtitle'>{t("about2")}</h4>
          </div>
          <div className="about-cards">
            {data.map((article, i) => (
                <div key={i}>
                    <img className="about-img" src={article.urlToImage} alt={article.title} />
                    <h3 className="about-text">{article.author}</h3>
                    <p className="about-info">{article.title}</p>
                </div>
            ))}
         
          </div>
          <div className="about-btns">
              <Button/>   <OutlineButton/>
            </div>
       
          </div>
       </div>
    );
}

export default About;
