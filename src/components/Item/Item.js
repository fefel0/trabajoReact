import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({product}) => {

    return (
        <div className="CardProduct">
                <h2 className="ItemMarca">
                    {product.marca}
                </h2>
                <img src={product.img} width='40%' alt={product.marca} className="ItemImg"/>
                <p className="ItemPrecio">
                    Precio: ${product.precio}
                </p>       
            <footer className='ItemDetail'>
                <Link to={`/detail/${product.id}`}>Ver detalle</Link>
            </footer>
        </div>
    )
}

export default Item
