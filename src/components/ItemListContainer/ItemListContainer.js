
import {useEffect, useState} from 'react'
import ItemList from '../ItemList/ItemList.js'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where} from 'firebase/firestore'


import { db } from '../../services/firebase'
const ItemListContainer = (props) => {
    
    const [productos, setProductos] =useState([])
    const { categoriaId } = useParams()
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        setCargando(true)
        const collectionRef = categoriaId ? query(collection(db, 'productos'), where('categoria', '==', categoriaId)) : collection(db, 'productos')

    getDocs(collectionRef).then(response => {
        const productos = response.docs.map(doc => {
            return { id: doc.id, ...doc.data() }
        })
        setProductos(productos)
    }).catch(error => {
        console.log(error)
    }).finally(() => {
        setCargando(false)
    })

       
    }, [categoriaId])

    if(cargando){
       return (<h1 style={{color: "rgb(186, 187, 186)",
                fontSize: "50px",
                padding: "20px",
                textAlign: 'center'}}>Cargando productos......</h1>)
    }

    return (<div> 
                <h1 style={{color: "rgb(186, 187, 186)",
                            fontSize: "50px",
                            padding: "20px",
                            textAlign: 'center'}}>{props.greeting}</h1>
                {productos.length >0
                ? <ItemList  productos={productos}/> 
                : <h2 style={{color: "rgb(186, 187, 186)",
                            fontSize: "50px",
                            padding: "20px",
                            textAlign: 'center'}}>No se encontraron productos disponibles</h2>}
            </div>
    )
}

export default ItemListContainer