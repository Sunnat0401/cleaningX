import { useEffect, useState } from "react";
import './Articles.css'
import OutlineButton from "../../Components/OutlineButton/OutlineButton";
import Button from "../../Components/Button/Button";
import { useTranslation } from "react-i18next";
function Articles() {
    const {t} = useTranslation()
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=4265d9a047b0459ebb6406af9fadedd8")
            .then((res) => res.json())
            .then((items) => {
                const info = items?.articles.slice(12,14);
                console.log(info);
                setItems(info);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="wrapper">
            <div className="loader"></div>
        </div>
    }
    if (!items || items.length === 0) {
        return <p className="loader-text">Error: information is not coming from the api</p>;
    }

    return (
      <div className='Articles'>
          <div className="container">
                  
          <div className="Articles-top">
          <h1 >{t("articles")}</h1>
      <div className="Articles-btns">
     <span  className="our-btns">   <Button/></span>
    <span className="our-btns">      <OutlineButton/></span>

      </div>
          </div>
          <div className="Articles-cards">
            {items.map((article, i) => (
                <div key={i} className="Article-card">
                    <img className="Articles-img" src={article.urlToImage} alt={article.title} />
                    <h3 className="Articles-text">{article.author}</h3>
                    <p className="Articles-info">{article.title}</p>
                </div>
              
            ))}
         
          </div>
          {/* <div className="about-btns">
              <Button/>  <button className='about-btn'>Explore Articles</button>
            </div> */}
       
          </div>
       </div>
    );
}

export default Articles;
