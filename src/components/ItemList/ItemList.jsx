import { ItemDetail } from '../ItemDetail/ItemDetail'

export const ItemList = ({productos})=>{
    
    
    return (
        productos.map( producto => <ItemDetail key={producto.id} item={producto}/>)
    )
    /*productos.map( producto => <ItemDetail key={producto} item={producto}/>)*/

}