import { useForm } from 'react-hook-form'
import { useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import {db} from '../../services/firebase/index'
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore'
import './Form.css' 
import Swal from 'sweetalert2'
import CartContext from '../../context/CartContext'

const Formulario = () => {
   
    const { cart, borrarCarrito,costoTotal} = useContext(CartContext)
    const [nombre, setNombre] = useState()
    const [apellido, setApellido] = useState()
    const [telefono, setTelefono] = useState()
    const [mail, setMail] = useState()
  
    const crearOrden = (e) => {
        e.preventDefault()
        
        const ordenObjeto = {
            comprador: {
                nombre: nombre,
                apellido: apellido,
                email: mail,
                telefono: telefono
            },
            producto: cart,
            total: costoTotal()
        }
        
        const sinStock = []
        const ids = cart.map(prod => prod.id)
        const batch = writeBatch(db)
        const collectionRef = collection(db, 'productos')
        
        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodCount = cart.find(prod => prod.id === doc.id)?.count
                    if (dataDoc.stock >= prodCount) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodCount })
                    } else {
                        sinStock.push({ id: doc.id, ...dataDoc })
                    }
                })
            }).then(() => {
                if (sinStock.length === 0) {
                    const collectionRef = collection(db, 'ordenes')
                    return addDoc(collectionRef, ordenObjeto)
                }
                else {
                    return Promise.reject({ type: 'sin_stock', productos: sinStock })
                }
            }).then(({ id }) => {
                Swal.fire(`Muchas gracias por su compra ${nombre} `, `Numero de Orden ${id}`, "success");
                batch.commit()
                reset()
                borrarCarrito()
                
            }).catch(error => {
                console.log(error)
                Swal.fire("Ups...", `No hay stock disponible`, "error");
                borrarCarrito()
            })


    }

    const { handleSubmit, reset, register  } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        reset()
    }


    return (
        <div>
            <h2 style={{color: "rgb(186, 187, 186)",
                fontSize: "25px",
                padding: "20px",
                textAlign: 'center'}}>Formulario De Compra</h2>
            <div className='contenedor-form'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>Nombre
                            <input type="text" name="nombre"placeholder='Nombre'
                                {...register('nombre', { required: true, maxLength: 20 })}
                                onChange={(e => setNombre(e.target.value))} />
                        </label>
                    </div>
                    <div>
                        <label>Apellido
                            <input type="text" name="apellido" placeholder='Apellido'
                                {...register('apellido', { required: true, maxLength: 20 })}
                                onChange={(e => setApellido(e.target.value))} />
                            </label>
                    </div>
                    <div>
                        <label>Mail
                            <input type="email"  name="mail" placeholder='Mail'
                                {...register('mail', { required: true, maxLength: 20 })}
                                onChange={(e => setMail(e.target.value))} />
                         </label>
                    </div>
                    <div>
                        <label>Telefono
                            <input type="number"  name="telefono" placeholder='Telefono'
                                {...register('telefono', { required: true, maxLength: 20 })}
                                onChange={(e => setTelefono(e.target.value))} />
                            </label>
                    </div>
                    <div style={{display:'flex' ,flexDirection: 'row', alignItems: 'centar'}}>
                        <Link to='/'  onClick={crearOrden} className='botonAccion' type='submit'  >Crear Orden</Link>
                        <Link to='/' className='botonAccion'>Volver</Link> 
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Formulario
