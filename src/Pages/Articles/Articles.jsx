import { useEffect, useState } from "react";
import './Articles.css'
import OutlineButton from "../../Components/OutlineButton/OutlineButton";
import Button from "../../Components/Button/Button";
function Articles() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
   ffasjdhfsajdh
    useEffect(() => {
        fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=4265d9a047b0459ebb6406af9fadedd8")
            .then((res) => res.json())
            .then((items) => {
                const info = items?.articles.slice(19, 21);
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
      <div className='Articles'>
          <div className="container">
                  
          <div className="Articles-top">
          <h1 >Our Articles</h1>
      <div className="Articles-btns">
        <Button/>
      <OutlineButton/>

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
