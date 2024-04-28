// import { useState , useEffect} from 'react';
// import './About.css'
// const About = () => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);

import { useEffect } from "react";
import { useState } from "react";

  
//     useEffect(() => {
//       fetch("https://newsapi.org/4265d9a047b0459ebb6406af9fadedd8")
//         .then((res) => res.json())
//         .then((items) => { 
//             console.log(items);
//         })
//         .catch((error) => {
//           console.error("Error fetching data:", error);
//         });
//     }, []);
//   return (
//    <h1>ass</h1>
//   )
// }

// export default About
function About() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=4265d9a047b0459ebb6406af9fadedd8")
        .then((res) => res.json())
        .then((items) => {
            console.log(items);
            const threeItems = items?.articles.slice(0, 3);
            console.log(threeItems);
          setData(threeItems?.articles);
        //   setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        //   setLoading(false);
        });
    }, []);
    // console.log(i18n);
    return (
        <div className="abot">
      <div className='container'>
        <h1 className="about-title">About Us</h1>
          <h3 className="about-subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aliquam nihil cumque doloribus? Eum laborum quae mollitia molestiae repellat dolore sunt labore, alias dignissimos consequuntur ab vero neque dolores nam?</h3>
        { 
          data.map((threeItems, i) => (
            <div key={i} className='card'>
              <img className='card-img' src={threeItems?.urlToImage} alt={threeItems?.title} />
              <h5 className='card-title'>
                {threeItems?.author}
              </h5>
              <p>{threeItems?.title}</p>
            </div>
          ))
        }
      </div>

        </div>
         
    );
  }
  


export default About;