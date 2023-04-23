import { Item } from '../Item/Item'

export const ItemList = ({productos})=>{
    
   // console.error(productos)
    
    return (
        productos.map( producto => <Item key={producto.id} item={producto}/>)
    )
    /*productos.map( producto => <ItemDetail key={producto} item={producto}/>)*/

}