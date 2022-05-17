const CartWidget = () => {
    return (
        <div style ={{display: "flex" ,flexDirection: "row", justifyContent: "center", alignItems:"center"}}>
            <img src="./images/shopping-cart.png" alt="carrito-compras" weight = "50px" height="50px"></img>
            <p style={{fontSize: "30px", padding: "0 20px", fontWeight: "900"}}>0</p>
        </div>
    )
}

export default CartWidget