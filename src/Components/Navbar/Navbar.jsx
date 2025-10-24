import './Navbar.css'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div className="nav-container">
        <nav className="navbar">
            <Link to='/'>
            <h1 className="navbar-logo">TiendaShop</h1>
            </Link>
            <Link to ='/CardContent'>
            <h2 className="navbar-cart">Carrito</h2>
            </Link>
        </nav>
    </div>
  )
}

export default Navbar