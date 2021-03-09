import React from 'react'
import './NotFound.css'
const NotFound = (props) => {
    return (
        <h1 className="notfound">{props.children}</h1>
    );
}
export default NotFound;