import {getProductos} from '../../asyncmock.js'
import {useEffect, useState} from 'react'
import ItemList from '../ItemList/ItemList.js'


const ItemListContainer = (props) => {
    const [productos, setProductos] =useState([])
        

    useEffect(()=>{
        getProductos().then(response =>{
            setProductos(response)
        })
    },[]) 

    return (<div> 
            <h1 style={{color: "rgb(186, 187, 186)",
                        fontSize: "50px",
                        padding: "20px",
                        textAlign: 'center'}}>{props.greeting}</h1>
                        <ItemList style={{display: 'flex', flexDirection:'row'}} productos={productos}/>
            </div>
    )

}

export default ItemListContainer