import { useState } from 'react';
import Button from '../Button/Button';
import './ItemCount.css'

const ItemCount = ({initial = 1, stock = 1, onAdd}) => {
    const [count, setCount] = useState (initial)

    const decrement = () => {
        if(count > 0){
            setCount(count - 1)
        }
        
    }

    const increment = () => {
        if(count < stock){
            setCount(count + 1)
        }
        
    }

    return(
        <>
            <div className='buttonCard'>
            <Button name='-' handleClick={() => decrement()} />
            <h3>{count}</h3>
            <Button name='+' handleClick={() => increment()} />
            </div>
            <Button name='Add To Cart' handleClick={() => onAdd(count)} />
        </>
    )
}

export default ItemCount