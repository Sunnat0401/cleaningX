import { useEffect, useState } from "react";
import OutlineButton from "../../Components/OutlineButton/OutlineButton";
import './Services.css'
import { useTranslation } from "react-i18next";

function Services() {
    const { t } = useTranslation();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/news");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setItems(data.articles);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="wrapper">
                <div className="loader"></div>
            </div>
        );
    }

    if (!items || items.length === 0) {
        return <p className="loader-text">Error: Information is not coming from the API</p>;
    }

    return (
        <div className='services'>
            <div className="container">
                <div className="service-top">
                    <h1>{t("service1")}</h1>
                    <span className="service-btn"><OutlineButton/></span>
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
            </div>
        </div>
    );
}

export default Services;
