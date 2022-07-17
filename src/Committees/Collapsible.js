import React, { useState } from 'react'
import '../App.css'

function Collapsible(props) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='collapse-content'>
            <h1 className='toggle' onClick={() => setIsOpen(!isOpen)}>
                <a className='hoverer' href={void(0)}>
                <strong className={props.col}>
                    {props.label}
                </strong>
                </a>
                </h1>
            {isOpen && <div className='content'>{props.children}</div>}
        </div>
    )
}

export default Collapsible