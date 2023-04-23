export const Greeting = ({ path=0}) => {

    const greetings = [{
        id: 0,
        mensaje: "LOS MEJORES PRODUCTOS LOS ENCONTRAS ACÁ"
    }, {
        id: 1,
        mensaje: "TODO FILTROS"
    }, 
{
    id: 2,
        mensaje: "TODO ACEITES"
}, {
    id: 3,
        mensaje: "TODO PARA REFRIGERAR"
},
{
    id: 4,
        mensaje: "DETALLE DEL PRODUCTO"
}
]
      
    const greeting = greetings.find( mensaje => mensaje.id == path); 
    return (
        <>
            <p>{greeting.mensaje}</p>
        </>

    )
}