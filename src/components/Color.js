import React from 'react'

const Color = (props) => {
    return (
        <div style={{backgroundColor: props.colorCode, flex: 1}}>
            <div style={{padding: 10, backgroundColor: "rgba(256,256,256,.5)", width: "min-content", margin: "50% auto", }}>
                <p onClick={() => navigator.clipboard.writeText('#'+props.colorCode)}>{props.colorCode}</p>
            </div>
        </div>
    )
}

export default Color
