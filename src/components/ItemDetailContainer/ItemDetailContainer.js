import { getProductosById } from "../../asyncmock"
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail.js/ItemDetail"
const ItemDetailContainer = ()=>{
    const[productos, setProductos] =useState()

    useEffect(()=>{
        getProductosById('1').then(response =>{
            setProductos(response)
        })
    },[]) 

    return(
        <div>
            <ItemDetail {...productos}/>
        </div>
    )

}

export default ItemDetailContainer