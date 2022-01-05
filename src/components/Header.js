import React from 'react'

const Header = (props) => {
    return (
        <div>
            <h1 style={{fontSize: 24}}>{props.text}</h1>  
        </div>
    )
}

export default Header
