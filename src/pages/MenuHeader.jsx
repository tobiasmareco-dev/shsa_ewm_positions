import React from 'react'
import { Link } from 'react-router-dom'

function MenuHeader() {
  return (
    <Link to={'/'} className='font-bold uppercase underline'>Inicio</Link>
  )
}

export default MenuHeader