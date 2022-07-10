/* import { getProductosById } from "../../asyncmock" */
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail.js/ItemDetail"
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase'
const ItemDetailContainer = ()=>{

    
    const[producto, setProducto] =useState()

    const { productoId } = useParams()

    useEffect(()=>{
        getDoc(doc(db, 'productos', productoId)).then(response => {
            
            const producto = { id: response.id, ...response.data()}
            setProducto(producto)
        }).catch(error => {
            console.log(error)
        })

    }) 

    return(
        <div>
            <ItemDetail {...producto}/>
        </div>
    )
}

export default ItemDetailContainer