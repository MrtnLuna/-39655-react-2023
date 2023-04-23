import "./itemDetail.css"
import {ItemCount} from "../ItemCount/ItemCount"; 

export const ItemDetail = ({item}) =>{
    console.log(item.img)
    const onAdd = (contador) => {
        console.log(contador)
        console.log(item)
    }
    return (
        <div className="cardDetail shadow p-3 mb-5 bg-white rounded">
                <div className="imgCol">
                    <img src={item.img} className="" alt={`Imagen producto ${item.nombre}`} />
                </div>
                <div className="detailCol">
                    <div className="itemDetail">
                        <div className="card-title ">MODELO: <span>{item.modelo}</span></div>
                        <div className="card-text">MARCA: <span>{item.marca}</span></div>
                        <div className="card-text">PRECIO: {item.precio}</div>
                        <div className="card-text">STOCK: {item.stock}</div>
                        <div className="buttonsCount">
                            <ItemCount ValInicial={1} min={1} max={item.stock} onAdd={onAdd}/>
                        </div>
                        
                    </div>
                </div>
                                
            
        </div>
    )
}
