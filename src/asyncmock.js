const productos= [
    {
    id:1,
    nombre:'Teclado Redragon K550',
    precio:8250,
    foto:'../images/teclado_redragon_k550.jpg',
    categoria: 'teclado',
    stock:10,
    detalle:'Teclado Redragon K550',

},{
    id:2,
    nombre:'Teclado Logitech G213 Prodigy',
    precio:6700,
    foto:'../images/teclado_Logitech_G213_Prodigy.jpg',
    categoria:'teclado',
    stock: 15,
    detalle:'Teclado Logitech G213 Prodigy',

},{
    id:3,
    nombre:'Silla Gamer Corsair T1 Race Black/Yellow',
    precio:69200,
    foto:'../images/silla_gamer_corsair_t1_race_black_yellow.jpg',
    categoria: 'silla gamer',
    stock: 5,
    detalle:'Silla Gamer Corsair T1 Race Black/Yellow',

},{
    id:4,
    nombre: 'Monitor Gamer LG 24 UltraGear 144Hz 1ms',
    precio:47400,
    foto:'../images/monitor_gamer_lg_24__ultraGear_144Hz.jpg',
    categoria: 'monitor',
    stock: 16,
    detalle:'Monitor Gamer LG 24 UltraGear 24"GL600F 144Hz 1ms',

}

]

export const getProductos = () => {
    return new Promise ((resolve) =>{
            setTimeout(()=>{
                resolve(productos)
        }, 2000)
    })
}