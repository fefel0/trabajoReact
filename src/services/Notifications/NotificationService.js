import './NotificationService.css'
import { useState, createContext, useContext } from 'react'

const Notification = ({ message, severity }) => {
    const notificationStyle = {
        display: 'flex',
        position: 'absolute',
        justifyContent: 'center',
        alingItems: 'center',
        color: 'black',
        fontSize: '25px',
        borderRadius: '10px',
        top: 80,
        right: '5px',
        height: '40px',
        
    }

    const notificationConfig = true ?
    {
        style: notificationStyle,
        className: severity === 'success' ? 'Success' : 'Error'
    } : {}

    if(message === '') {
        return null
    }

    return (
        <div {...notificationConfig}>
            {message}
        </div>
    )
}

const NotificationContext = createContext()

export const NotificationServicesProvider = ({ children }) => {
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('')

    const setNotification = (severity, message) => {
        setMessage(message)
        setSeverity(severity)
        setTimeout(() => {
            setMessage('')
        }, 5000)
    }

    return (
        <NotificationContext.Provider value={setNotification}>
            <Notification message={message} severity={severity}/>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotificationService = () => {
    return useContext(NotificationContext)
}