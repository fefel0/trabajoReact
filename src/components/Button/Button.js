import React from 'react';

const Button = ({name, backgroundColor: backgroundColor, color: colorText, handleClick}) => {
    return <button className='btn' style={{backgroundColor: backgroundColor, color: colorText}} onClick={handleClick}>{name}</button>;
};

export default Button;