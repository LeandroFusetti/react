import {useState} from 'react'
import './ItemCount.css'
const ItemCount = ({stock,inicial}) =>{

    const [count, setCount]= useState(parseInt(inicial))
    
    const sumar = () => {
        if((count>=0) &&(count < stock)){
        setCount (count + 1)
        }
}
    const restar = () => {
        if(count>0){
        setCount (count - 1)
        }
}
    return (
        <div>
            <div className='cart'>
                <img src='./images/teclado-gamer-led-trust-ziva.jpg' alt='teclado-gamer'  height='190' ></img>
                <div className= 'posicionBotones' >
                    <button onClick={restar}>-</button>
                    <p>{count}</p>
                    <button onClick={sumar}>+</button>
                </div>
                <button className='addBoton'>Agregar al carrito</button>
            </div> 
        </div>
        ) 
}

export default ItemCount