import { logo } from '../../assets'
import Button from '../Button/Button'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <img src={logo} alt=""Logo className='nav-logo' />
            <ul className="nav-lists">
                <li className="nav-list"><a href="#" className="nav-link">Home</a></li>
                <li className="nav-list"><a href="#" className="nav-link">About</a></li>
                <li className="nav-list"><a href="#" className="nav-link">Service</a></li>
                <li className="nav-list"><a href="#" className="nav-link">Articles</a></li>
                <li className="nav-list"><a href="#" className="nav-link">Contact</a></li>
            </ul>
            <select name="" id="" className="nav-select">
                <option value="uz">Uz</option>
                <option value="en">En</option>
            </select>
            <Button/>
        </div>
    </div>
  )
}

export default Navbar