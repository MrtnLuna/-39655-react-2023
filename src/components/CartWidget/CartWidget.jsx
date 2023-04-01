import  "./cartWidget.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import { Cart } from 'react-bootstrap-icons';

export const CartWidget = ({ cantCarrito }) => {
    return (
        <div className="cart" >
        <Cart className="cartComponent" size={20}/>
            <p>{cantCarrito}</p>
        </div>
    )
}