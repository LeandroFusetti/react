import './Item.css'
import ItemCount from "../ItemCount/ItemCount"
import { Link } from 'react-router-dom'
const Item = ({nombre, precio,foto, stock, id}) => {

    return(
        <div className="card">
            <img src= {foto} width='190px' alt={nombre}/>
            <p>{nombre}</p>
            <p>${precio}</p>
            <Link to={`/detalle/${id}`}>ver detalle</Link>
            <ItemCount inicial={1} stock={stock} />
            
        </div>
    )

}

export default Item