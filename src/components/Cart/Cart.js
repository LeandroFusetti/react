import { useContext} from 'react'
import CartContext from '../../context/CartContext'
import './Cart.css'
import { Link } from 'react-router-dom'
/* import { db } from '../../services/firebase'
import { addDoc, collection,  getDocs, query, where, documentId, writeBatch } from 'firebase/firestore'
 */
const Cart =() => {

    const {cart, borrarItem, borrarCarrito, costoTotal, /* getCount  */} = useContext (CartContext)
     
    /* const createOrder = () => {
        console.log('crear orden')
        const objOrder = {
            buyer: {
                Nombre: 'Leandro Fusetti',
                Email: 'leandrofusetti@gmail.com',
                telefono: '1154641853',
                direccion: 'calle falsa 123',
                comentarios: '5ºB'
            },
            items: cart,
            total: costoTotal()
        }

        const ids = cart.map(prod => prod.id)
        const batch = writeBatch(db)
        const sinStock = []
        const collectionRef = collection(db, 'productos')

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodCount = cart.find(prod => prod.id === doc.id)?.count

                    if(dataDoc.stock >= prodCount) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodCount})
                    } else {
                        sinStock.push({ id: doc.id, ...dataDoc})
                    }
                })
            }).then(() => {
                if(sinStock.length === 0) {
                    const collectionRef = collection(db, 'ordenes')
                    return addDoc(collectionRef, objOrder)
                } else {
                    return Promise.reject({ type: 'sin_stock', productos: sinStock})
                }
            }).then(({ id }) => {
                batch.commit()
                borrarCarrito()
                alert(`Su orden de compra es: ${id}`)
            }).catch(error => {
                console.log(error)
                alert(`Algunos productos no tienen stock`)
            })
    } */
    
    
    /* if (getCount()  === 0) {
        return (
            <div style={{display:'flex', flexDirection:'column', alignItems:'center'}} >
                <h2 className="carrito">No hay productos en el carrito</h2>
                <Link to="/">
                    <button className="botonAccion">Volver atras</button>
                </Link>
            </div>
        )
    }  */


    return(
        
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <h1 className='carrito'>Carrito</h1>
            <div >
                <div className='tabla'>
                            <p >Nombre</p>
                            <p>Cantidad </p>
                            <p>Precio x Unidad</p>
                            <p>Subtotal:</p>
                </div>
                {cart.map(prod => {
                    return(
                        <div key={prod.id} className='cart' >
                            <img src= {prod.foto} width='100px' alt={prod.nombre}/>
                            <p style={{width:'300px'}}>{prod.nombre}</p>
                            <p>{prod.count}</p>
                            <p>${prod.precio}</p>
                            <p>${prod.precio * prod.count}</p>
                            <button className= 'botonAccion'onClick={() => borrarItem(prod.id)}>X</button>
                            
                        </div>
                    )})
                }
                
            </div>
            <p style={{fontSize:'30px', paddingBottom:'20px'}}>TOTAL $ {costoTotal()}</p> 
            
            {/* <button className="botonAccion" onClick={createOrder}>TERMINAR MI COMPRA</button> */}
            <Link to ='/order' className='botonAccion' style={{margin: '20px'}} >FINALIZAR COMPRA</Link>
            <button className= 'botonAccion' onClick={()=> borrarCarrito()}>ELIMINAR</button>
        </div>
    )
            
}

export default Cart