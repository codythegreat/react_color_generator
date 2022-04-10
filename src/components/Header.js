import React from 'react'

const Header = (props) => {
    return (
        <div>
            <h1 style={{fontSize: 24}}>{props.text}</h1>  
            <p style={{fontSize: 12}}>{props.subtext}</p>  
        </div>
    )
}

export default Header
