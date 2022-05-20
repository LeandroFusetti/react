import {useState} from 'react'
const ItemCount = (props) =>{



    
    const [count, setCount]= useState(0)

    const sumar = () => {
    if((count>=0) &&(count < props.stock)){
    


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
            <button onClick={restar}>-</button>
            <p>{count}</p>
            <button onClick={sumar}>+</button>
        </div>
    )

}

export default ItemCount