import "./itemCount.css"
import {useCount} from '../hooks/useCount';

export const ItemCount = ({ ValInicial, min, max, onAdd }) =>{

    const { count, minus, sum, reset } = useCount(ValInicial, min, max)

    return(
        <div className="buttonsContainer">
            <div>
            <button className="addButton" onClick={sum}>+</button>
              {count}
            <button className="minusButton" onClick={minus}>-</button>
            
            <button className="resetButton" onClick={reset}>Reset</button>
            </div>
            <button className="addCartWidget" onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}