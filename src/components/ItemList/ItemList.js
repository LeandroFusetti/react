import Item from "../Item/Item";
const ItemList = ({productos}) => {
    

    return (
        <div style={{display: 'flex', flexDirection:'row'}}>
            {productos.map(product => <Item key={product.id} {...product}  />)}
        </div>
        )} 
    



export default ItemList