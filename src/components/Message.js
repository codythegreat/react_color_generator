import React from 'react'

const Message = (props) => {
    return (
        <div>
            <div style={{backgroundColor: props.color, width: 100, height: 100, borderRadius: 50}}></div>
            <p>{props.message}</p>
        </div>
    )
}

export default Message
