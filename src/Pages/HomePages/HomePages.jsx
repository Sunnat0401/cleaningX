import { navbar1, phone } from '../../assets'
import Button from '../../Components/Button/Button'
import Navbar from '../../Components/Navbar/Navbar'
import './HomePages.css'
const HomePages = () => {
  return (
    <div className='home-pages'>
        <Navbar/>
        <div className="container">
            <div className="home-left">
                <h1 className="home-title">Quality cleaning for your home</h1>
                <p className="home-text">Lorem ipsum dolor sit amet erat iusto vitae officiis possimus fugit beatae. Animi culpa magnam corrupti suscipit totam error labore eaque quo quibusdam beatae aut a dicta, est accusantium facilis non quia? Itaque eligendi, in nobis sed doloribus at voluptates repellat, suscipit dolore, impedit ullam veniam eum officiis. Illum corporis dolor, dignissimos eveniet facere eaque ea accusamus, optio, dicta adipisci perferendis harum! Quos.</p>
                <div className="home-button">
                    <Button/> <img src={phone} alt=""  className='button-img'/>
                    <p className="button-subtitle">
                        class us now <br />
                        <a href="#" className="button-anchor"> +998901249484</a>
                    </p>
                </div>
            </div>
          <img src={navbar1} alt="" className="home-right" />
        </div>
    </div>
  )
}

export default HomePages