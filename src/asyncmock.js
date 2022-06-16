const productos= [
    {
    id:'1',
    nombre:'Teclado Redragon K550',
    precio:8250,
    foto:'../images/teclado_redragon_k550_1.jpg',
    foto2:'../images/teclado_redragon_k550_2.jpg',
    foto3:'../images/teclado_redragon_k550_3.jpg',
    categoria: 'perifericos',
    stock:10,
    detalle:'Con teclas ajustadas para el rendimiento. G213 Prodigy combina lo mejor en sensación táctil y rendimiento para gaming. Pon un toque exclusivo en el sistema con zonas de iluminación RGB personalizables, o usa controles multimedia para reproducir, interrumpir o silenciar al instante música o vídeo.',

},{
    id:'2',
    nombre:'Teclado Logitech G213 Prodigy',
    precio:6700,
    foto:'../images/teclado_Logitech_G213_Prodigy_1.jpg',
    foto2:'../images/teclado_Logitech_G213_Prodigy_2.jpg',
    foto3:'../images/teclado_Logitech_G213_Prodigy_3.jpg',
    categoria:'perifericos',
    stock: 15,
    detalle:'G213 Prodigy se ha diseñado para tu forma de jugar. Con teclas ajustadas para el rendimiento, combina lo mejor en sensación táctil y rendimiento para gaming. Las teclas están hechas para ofrecer una respuesta ultrarrápida, hasta 4 veces superior a la de los teclados estándar. Pon un toque exclusivo en el sistema con zonas de iluminación RGB personalizables',

},{
    id:'3',
    nombre:'Silla Gamer Corsair T1 Race Black/Yellow',
    precio:69200,
    foto:'../images/silla_gamer_corsair_t1_race_black_yellow_1.jpg',
    foto2:'../images/silla_gamer_corsair_t1_race_black_yellow_2.jpg',
    foto3:'../images/silla_gamer_corsair_t1_race_black_yellow_3.jpg',
    categoria: 'sillasgamer',
    stock: 5,
    detalle:'La silla CORSAIR T1 RACE 2018 presenta un asiento ancho, respaldo alto y tonos de color personalizados en dos capas para ofrecerle el estilo, la comodidad y la resistencia que necesita para largas sesiones de juego.',

},{
    id:'4',
    nombre: 'Monitor Gamer LG 24 UltraGear 144Hz 1ms',
    precio:47400,
    foto:'../images/monitor_gamer_lg_24__ultraGear_144Hz_1.jpg',
    foto2:'../images/monitor_gamer_lg_24__ultraGear_144Hz_2.jpg',
    foto3:'../images/monitor_gamer_lg_24__ultraGear_144Hz_3.jpg',
    categoria: 'monitores',
    stock: 16,
    detalle:'Jugá más fluido con frecuencia de actualización de 144Hz y 1ms de velocidad de respuesta gracias a la tecnología Motion Blur Reduction. Tecnología RADEON FreeSync™ para disfrutar de toda la acción sin parpadeos. Interacción en tiempo real y sin retrasos gracias a Dynamic Action Sync (DAS Mode). El Estabilizador de Negros permite colores oscuros más diferenciados.',
    
}

]

export const getProductos = () => {
    return new Promise ((resolve) =>{
            setTimeout(()=>{
                resolve(productos)
        }, 200)
    })
}
export const getProductosById = (id) => {
    return new Promise ((resolve) =>{
            setTimeout(()=>{
                resolve(productos.find(prod=> prod.id ===id))
        }, 200)
    })
}

export const getProductosPorCategoria = (categoriaId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.categoria === categoriaId))
        },200)
    })
}