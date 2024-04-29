import { useEffect, useState } from "react";
import OutlineButton from "../../Components/OutlineButton/OutlineButton";
import './Services.css'
function Services() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=4265d9a047b0459ebb6406af9fadedd8")
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
        return <p>Loading...</p>;
    }
    if (!items || items.length === 0) {
        return <p>there is an error: information is not coming from the api</p>;
    }

    return (
      <div className='services'>
          <div className="container">
                  
          <div className="service-top">
          <h1 >Our Services</h1>
        <OutlineButton/>
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
