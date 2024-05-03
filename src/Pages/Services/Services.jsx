import { useEffect, useState } from "react";
import OutlineButton from "../../Components/OutlineButton/OutlineButton";
import './Services.css'
import { useTranslation } from "react-i18next";
function Services() {
    const {t} = useTranslation()
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://newsapi.org/v2/everything?q=bitcoin&apiKey=4265d9a047b0459ebb6406af9fadedd8")
            .then((res) => res.json())
            .then((items) => {
                const info = items?.articles.slice(15, 18);
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
      <div className='services' id="service">
          <div className="container">
                  
          <div className="service-top">
          <h1 >{t("service1")}</h1>
     <span className="service-btn">    <OutlineButton/></span>
          </div>
          <div className="services-cards">
            {items.map((article, i) => (
                <div key={i}>
                    <img className="services-img" src={article.urlToImage} alt={article.title} />
                    <h3 className="services-text">{article.author}</h3>
                    <p className="services-info">{article.title}</p>
                </div>
            ))}
         
          </div>
          {/* <div className="about-btns">
              <Button/>  <button className='about-btn'>Explore Services</button>
            </div> */}
       
          </div>
       </div>
    );
}

export default Services;
