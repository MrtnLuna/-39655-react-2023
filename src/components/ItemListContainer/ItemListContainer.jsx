import "./itemListContainer.css"
export const ItemListContainer = ({ greeting }) => {
    return (
        <div className="container itemListContainer">
            <p>{greeting}</p>
        </div>
    )
}