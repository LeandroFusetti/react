
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

export default Formulario