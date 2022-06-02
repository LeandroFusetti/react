import { getProductosById } from "../../asyncmock"
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail.js/ItemDetail"
import { useParams } from 'react-router-dom'

const ItemDetailContainer = ()=>{

    const[producto, setProductoId] =useState()
    const { productoId } = useParams()
    useEffect(()=>{
        getProductosById(productoId).then(response =>{
            setProductoId(response)
        })
    }) 

    return(
        <div>
            <ItemDetail {...producto}/>
        </div>
    )
}

export default ItemDetailContainer