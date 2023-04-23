import 'bootstrap/dist/css/bootstrap.min.css';
import {CartWidget} from "../CartWidget/CartWidget.jsx"
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-primary">
        <div className="container">
        <a href="" className="navbar-brand mb-0 h1">
            Tienda Online
            </a>
                <ul className="navbar-nav">
                <li className='nav-item'>
                    <Link to={`/`} className='nav-link'>Inicio</Link>
                </li>
                    <li className='nav-item'>
                    <Link to={`/category/1`} className="nav-link">Filtros</Link>
                    </li>
                    
                    <li className="nav-item active">
                        <Link className="nav-link" to={`category/2`}>Aceites</Link>
                    </li>
                    <li className="nav-item active">
                    <Link className="nav-link" to={`category/3`}>Refrigeración</Link>
                    </li>
                </ul>

        <CartWidget cantCarrito={0}/>
        </div>
    </nav>
    )
}

export default NavBar;