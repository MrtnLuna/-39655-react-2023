import "./item.css";
import {ItemCount} from "../ItemCount/ItemCount"; 

export const ItemDetail = ({item}) =>{

    const onAdd = (contador) => {
        console.log(contador)
        console.log(item)
    }
    return (
        <div className="card shadow p-3 mb-5 bg-white rounded">
            <img src={item.img} className="card-img-top" alt={`Imagen producto ${item.nombre}`} />
            <div className="card-body">
                <div className="card-title ">Modelo: {item.modelo}</div>
                <div className="card-text">Marca: {item.marca}</div>
                <div className="card-text">Precio: {item.precio}</div>
                <div className="card-text">Stock: {item.stock}</div>
                <ItemCount ValInicial={1} min={1} max={item.stock} onAdd={onAdd}/>
            </div>
        </div>
    )
}
