import React from 'react'
import LoaderImagen from '../helps/img/Loader.svg'

export default function Loader() {
  return (
    <div className='Loader'>
        <img src={LoaderImagen} alt="Rick And Morty Logo"/>
        <p>Loarding...</p>
    </div>
  )
}
