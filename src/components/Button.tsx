import React from 'react'
import "./Button.scss"

const Button = ({message = 'Hello world'}) => (
    <button>{message}</button>
 )
export default Button