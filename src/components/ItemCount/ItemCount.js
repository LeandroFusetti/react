import {useState, } from 'react'
import './ItemCount.css'
const ItemCount = ({stock,inicial, onAdd}) =>{

    const [count, setCount]= useState(inicial)
 

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
    const  contadorDeBoton = () =>{
        
        console.log(count);
        onAdd(count)
    }


    return (
            <div className='contador'>
                <div className= 'posicionBotones' >
                    <button onClick={restar}>-</button>
                    <p>{count}</p>
                    <button onClick={sumar}>+</button>
                </div>
                <button className='addBoton' onClick={contadorDeBoton}>Agregar al carrito</button>
            </div> 
        
        ) 
}

export default ItemCount