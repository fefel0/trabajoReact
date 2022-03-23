import { useState, useImperativeHandle, forwardRef } from 'react'

const Togglable = forwardRef((props, ref) => {
    const [on, setOn] = useState(false)
    const hideWhenVisible = { display: on ? 'none' : ''}
    const showWhenVisible = { display: on ? '' : 'none'}
    const toggleVisibility = () => {
        setOn(!on)
    }

    useImperativeHandle(ref, () => {
        return {
            toggleVisibility
        }
    })

    return (
        <div>
            <div style={hideWhenVisible}>
                <button className='BtnTogglable' style={{backgroundColor: '#219c0b'}} onClick={toggleVisibility}>{props.buttonLabelShow}</button>
            </div>
            <div style={showWhenVisible}>
                <button className='BtnTogglable' style={{backgroundColor: '#db4025'}} onClick={toggleVisibility}>{props.buttonLabelHide ? props.buttonLabelShow : 'Cancel'}</button>
                {props.children}
            </div>
        </div>
    )
})

export default Togglable
