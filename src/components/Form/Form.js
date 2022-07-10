/* 
import {useForm} from "react-hook-form";

import {useState, useContext} from 'react'
import {addDoc, collection} from 'firebase/firestore'
import {db} from '../../services/firebase'
import {Link} from 'react-router-dom'
import CartContext from '../../context/CartContext'
import Swal from 'sweetalert2'
import './Form.css' 

const Formulario = () => {

    const { register} = useForm();

    const {cart, costoTotal, borrarCarrito} = useContext(CartContext)

    const [datos, setDatos] = useState({
        nombre: '', 
        direccion: '', 
        tel: '', 
        mail: '', 
    })

    const crearOrden = (e) => {
        e.preventDefault(); 
        const ObjOrden = {
            cliente: datos,
            items: cart,
            total: costoTotal()
        }

        const coleccion = collection(db, 'ordenes')
        addDoc(coleccion, ObjOrden).then(({ id }) => {
            console.log(datos)
            Swal.fire({
                title: `Gracias por tu compra ${datos.nombre}`,
                text: `Se creo la orden con el id Nº ${id}`,
                
            })
        })
        borrarCarrito();
    }

    const handleInputChange = (e) => {
        setDatos({ 
            ...datos, 
            [e.target.name] : e.target.value 

        })
    }

    const handleSubmit = (e) => {
        if(e.target.name === '') {
            Swal.fire({
                title: 'Error',
                text: 'Todos los campos son requeridos',
                icon: 'error'
            })
            return;
        }
        console.log(datos)
    }

    return (
        <div >
            <h2>Orden de compra</h2>
            <form className='form' onSubmit = {handleSubmit} >
                <label>
                    Nombre completo
                    <input 
                        type='text' 
                        name='nombre' 
                        placeholder='Escribe tu nombre' 
                        
                        {...register('nombre', {required: true, message: 'Campo requerido' })}
                        onChange={handleInputChange}
                        value={datos.nombre}
                    />
                </label>
                <label>
                    Direccion
                    <input 
                        type='text' 
                        name='direccion' 
                        placeholder='Escribe tu direccion' 
                        
                        {...register('direccion', {required: true, message: 'Campo requerido' })}
                        onChange={handleInputChange}
                        value={datos.direccion}
                    />
                </label>
                <label>
                    Telefono
                    <input 
                        type='number' 
                        name='tel' 
                        placeholder='09xxxxxxx' 
                        
                        {...register('tel', {required: true, message: 'Campo requerido' })}
                        onChange={handleInputChange}
                        value={datos.tel}
                    />
                </label>
                <label>
                    Correo electronico
                    <input 
                        type='mail' 
                        name='mail' 
                        placeholder='ejemplo@mail.com' 
                        
                        {...register('mail', {required: true, message: 'Campo requerido' })}
                        onChange={handleInputChange}
                        value={datos.mail}
                    />
                </label>
                <Link to='/' className='ButtonDetail' style={{width: '150px', display: 'block', margin: '0 auto'}} type='submit'  onClick={crearOrden}>Enviar</Link>
            </form>
        </div>
    )
}

export default Formulario */

import { useForm } from 'react-hook-form'
import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
/* import { useNavigate } from "react-router-dom" */
import {db} from '../../services/firebase/index'
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore'
import './Form.css' 
/* import '../ItemDetailConteiner/ItemDetailConteiner.css' */
import CartContext from '../../context/CartContext'
import Swal from 'sweetalert2'

const Formulario = () => {
    /* const navegacion = useNavigate() */
    const { cart, borrarCarrito,costoTotal} = useContext(CartContext)
   /*  const [cargando, setCargando] = useState(false) */
    const [nombre, setNombre] = useState()
    const [apellido, setApellido] = useState()
    const [telefono, setTelefono] = useState()
    const [mail, setMail] = useState()
    /* const [totalApagar, setTotal] = useState(0) */
    

   /*  useEffect(() => {
        calcularTotal2()
    }, [cart])

    const calcularTotal2 = () => {
        let total = 0
        cart.forEach(prod => {
            total += prod.precio * prod.inicial
        })
        setTotal(total)
    } */

    const crearOrden = (e) => {
        e.preventDefault()
        /* setCargando(true) */
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
        const ids = cart.map(prod => prod.id)

        const batch = writeBatch(db)

        const sinStock = []

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
                Swal.fire(`Gracias por la compra `, `Numero de Orden ${id}`, "success");
                batch.commit()
                reset()
                borrarCarrito()
                /* navegacion('/') */
            }).catch(error => {
                console.log(error)
                Swal.fire("Disculpe", `No hay stock disponible`, "error");
                borrarCarrito()
                /* navegacion('/') */
            })/* .finally(() => {
                setCargando(false)
            }) */


    }

    const { register, handleSubmit, reset } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        reset()
    }

    /* if (cargando) {
        return (
            <div style={{display:'flex', flexDirection:'column', alignItems:'center'}} >
                <h2 className="carrito">No hay productos en el carrito</h2>
                <Link to="/">
                    <button className="botonAccion">Volver atras</button>
                </Link>
            </div>)
    } */

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
                        <input
                            type="text"
                            name="nombre"
                            placeholder='Nombre'
                            {...register('nombre', { required: true, maxLength: 20 })}
                            onChange={(e => setNombre(e.target.value))} 
                            />
                            </label>
                    </div>
                    <div>
                        <label>Apellido
                        <input
                            type="text"
                            name="apellido"
                            placeholder='Apellido'
                            {...register('apellido', { required: true, maxLength: 20 })}
                            onChange={(e => setApellido(e.target.value))} 
                            />
                            </label>
                    </div>
                    <div>
                        <label>Mail
                        <input
                            type="email"
                            name="mail"
                            placeholder='Mail'
                            {...register('mail', { required: true, maxLength: 20 })}
                            onChange={(e => setMail(e.target.value))}
                             />
                             </label>
                    </div>
                    <div>
                        <label>Telefono
                        <input
                            type="number"
                            name="telefono"
                            placeholder='Telefono'
                            {...register('telefono', { required: true, maxLength: 20 })}
                            onChange={(e => setTelefono(e.target.value))}
                            />
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
