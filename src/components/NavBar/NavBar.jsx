import 'bootstrap/dist/css/bootstrap.min.css';
import {CartWidget} from "../CartWidget/CartWidget.jsx"

const NavBar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-primary">
        <div className="container">
        <a href="" className="navbar-brand mb-0 h1">
            Tienda Online
            </a>
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a href="#" className="nav-link active">Filtros y Aceites</a>
                    </li>
                    <li className="nav-item active">
                        <a href="#" className="nav-link">Iluminación</a>
                    </li>
                    <li className="nav-item active">
                        <a href="#" className="nav-link">Refrigeración</a>
                    </li>
                </ul>

        <CartWidget cantCarrito={0}/>
        </div>
    </nav>
    )
}

export default NavBar;