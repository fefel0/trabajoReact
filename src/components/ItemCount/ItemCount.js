import { useState } from 'react';
import Button from '../Button/Button';

const ItemCount = ({initial, stock, onAdd}) => {
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
            <div>
            <Button name='-' handleClick={decrement} />
            <h3>{count}</h3>
            <Button name='+' handleClick={increment} />
            </div>
            <Button name='Add To Cart' handleClick={() => onAdd(count)} />
        </>
    )
}

export default ItemCount