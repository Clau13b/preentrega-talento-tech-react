import './NavBar.css'
import {Link} from 'react-router-dom'


const NavBar =() => {
  return (
    <div className="nav-container">
        <nav className="navbar">
            <Link to='/'>
            <h1 className="navbar-logo">TiendaShop.</h1>
            </Link>
            <Link to ='/cart'>
            <h2 className="navbar-cart">Carrito</h2>
            </Link>
        </nav>
    </div>
  )
}

export default NavBar