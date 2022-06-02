import {getProductos} from '../../asyncmock.js'
import {useEffect, useState} from 'react'
import ItemList from '../ItemList/ItemList.js'
import { useParams } from 'react-router-dom'
import { getProductosPorCategoria } from '../../asyncmock'

const ItemListContainer = (props) => {
    const [productos, setProductos] =useState([])
    const { categoriaId } = useParams()
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        setCargando(true)
        if(!categoriaId) {
            getProductos().then(response => {
                setProductos(response)
            }).finally(()=>{
                setCargando(false)
            })

            

        } else {
            getProductosPorCategoria(categoriaId).then(response => {
                setProductos(response)
            }).finally(()=>{
                setCargando(false)
            })
        }
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