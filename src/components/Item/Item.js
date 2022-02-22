import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({product}) => {

    return (
        <div className="CardProduct">
                <h2 className="ItemHeader">
                    {product.marca}
                </h2>
                <img src={product.img} width='20%' alt={product.marca} className="ItemImg"/>
                <p className="Info">
                    Precio: ${product.precio}
                </p>       
            <footer className='ItemFooter'>
                <Link to={`/detail/${product.id}`}>Ver detalle</Link>
            </footer>
        </div>
    )
}

export default Item
