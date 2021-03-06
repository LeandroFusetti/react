import './Item.css'

import { Link } from 'react-router-dom'
const Item = ({nombre, precio,foto, id}) => {

    return(
        <div className="card">
            <img src= {foto} width='190px' height='190px' alt={nombre}/>
            <p>{nombre}</p>
            <p>${precio}</p>
            <Link to={`/detalle/${id}`} className='verdetalle'>ver detalle</Link>
        </div>
    )
}

export default Item