import React from 'react'
import './Box.css'

export default function Box(props) {
    return (
        <div className="box">
            <img src={props.data.thumbnail} alt={props.data.title}></img>
            <h4>{props.data.title}</h4>
            <h5>{props.data.author}</h5>
            <a href={props.data.url}>View Image</a>
        </div>
    )
}