import React from 'react'
import Color from './Color'

const ColorContainer = (props) => {
    return (
        <div style={{display: "flex", flexDirection: "column",flex: 1}}>
            <div
                style={{
                    display: "flex",
                    height: 'calc(100vh - 60px)' 
                }}        
            >
                <Color colorCode={props.colors[0]} colorName={"Grey"}></Color>
                <Color colorCode={props.colors[1]} colorName={"Grey"}></Color>
                <Color colorCode={props.colors[2]} colorName={"Grey"}></Color>
                <Color colorCode={props.colors[3]} colorName={"Grey"}></Color>
                <Color colorCode={props.colors[4]} colorName={"Grey"}></Color>
            </div>
        </div>
    )
}

export default ColorContainer