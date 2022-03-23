import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({product}) => {
    
    return (
        <div className="CardProduct">
                <h2 className="ItemMarca">
                    {product.marca}
                </h2>
                <div className='ItemImg'>
                    <img src={product.img} width='50%' alt={product.marca}/>
                </div>
                <p className="ItemPrecio">
                    Precio: ${product.precio}
                </p>       
            <footer className='ItemDetail'>
                <Link className='btnDetail' to={`/detail/${product.id}`}>Ver detalle</Link>
            </footer>
        </div>
    )
}

export default Item
