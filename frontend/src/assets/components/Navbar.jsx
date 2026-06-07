import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
        <nav>
            <ul className="container">
                <li className="list"><Link to="/"> Home</Link></li>
                <li className="list"><Link to="/">about </Link></li>
                <li className="list"><Link to="/">contact</Link></li>
                <li className="list"><Link to="/">service</Link></li>
                <li className="list">
                  <Link className="Link" to='/parent'>props</Link>
                </li>
                <li className="list">
                  <Link className="link" to='/useState'>useState</Link>
                </li>
                <li className="list">
                  <Link className="link" to='/useEffect'>useEffect</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar