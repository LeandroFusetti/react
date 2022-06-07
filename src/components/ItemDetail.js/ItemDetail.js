import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import {useState}  from 'react'
import './ItemDetail.css'
import { Link } from 'react-router-dom'


const ItemDetail = ({nombre, precio, foto,foto2,foto3, detalle, stock, }) => {
    
    
    
    const [count, setCount] = useState(0)

    const confirmarCompra = (count) => {
        
        setCount(count)
        
    }

   

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
                { count > 0  && <Link to='/cart'>Finalizar</Link>}
               
                { count = 0   && <ItemCount inicial={1} stock={stock} SumarAlCarrito={confirmarCompra} />}
            </div>
        </div>

    )
}

export default ItemDetail