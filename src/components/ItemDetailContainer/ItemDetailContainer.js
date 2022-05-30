import { getProductosById } from "../../asyncmock"
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail.js/ItemDetail"
const ItemDetailContainer = ()=>{
    const[productoId1, setProductoId1] =useState()

    useEffect(()=>{
        getProductosById(1).then(response =>{
            setProductoId1(response)
        })
    },[]) 

    return(
        <div>
            <ItemDetail {...productoId1}/>
        </div>
    )

}

export default ItemDetailContainer