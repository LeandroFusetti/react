import './Item.css'
import ItemCount from "../ItemCount/ItemCount"

const Item = ({nombre, precio,foto, stock}) => {

    return(
        <div className="cart">
            <img src= {foto} width='190px' alt={nombre}/>
            <p>{nombre}</p>
            <p>${precio}</p>
            <ItemCount inicial={1} stock={stock} />
        </div>
    )

}

export default Item