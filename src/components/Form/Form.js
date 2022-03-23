import { useState } from 'react'
import './Form.css'

const Form = ({ toggleVisibility, setContact }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [comment, setComment] = useState('')

    const handleForm = (e) => {
        e.preventDefault()
        toggleVisibility.current.toggleVisibility()

        const contact = {
            name,
            phone,
            address,
            comment
        }
        setContact(contact)
        setName('')
        setPhone('')
        setAddress('')
        setComment('')
    }

    return (
        <div className='contactForm'>
            <h2>Ingrese sus datos aqui:</h2>
            <form className='dataForm' onSubmit={handleForm}>
                <label className='LblName'> Nombre:
                    <input 
                        type='text'
                        value={name} 
                        onChange={({ target }) => setName(target.value)}
                    />
                </label>
                <label className='LblPhone'>Telefono:
                    <input
                        type='tel'
                        value={phone} 
                        onChange={({ target }) => setPhone(target.value)}
                    />
                </label>
                <label>Direccion:
                    <input
                        type='text'
                        value={address}
                        onChange={({ target}) => setAddress(target.value)}
                    />
                </label>
                <label>Comentario:
                    <input
                        type='text'
                        value={comment}
                        onChange={({ target }) => setComment(target.value)}
                    />
                </label>
                <button className='btnConfirm' type='submit'>Confirmar</button>
            </form>
        </div>
    )
}

export default Form