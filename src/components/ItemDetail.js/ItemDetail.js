import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({nombre, precio, foto,foto2,foto3, detalle, stock}) => {

    return(
        <div className='detalle'>
            <div className='detalleFotos'>
                <img src= {foto} width='190px'  alt={nombre}/>
                <img src= {foto2} width='190px'  alt={nombre}/>
                <img src= {foto3} width='190px'  alt={nombre}/>
            </div>    
            <div className='detalleInfo'>
                <h1>{nombre}</h1>
                <p>{detalle}</p>
                <h2>${precio}</h2>
                <ItemCount inicial={1} stock={stock}/>
            </div>
        </div>

    )
}

export default ItemDetail