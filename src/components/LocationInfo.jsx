import React from 'react'

export default function LocationInfo({location}) {
  return (
    <article className='LocationInfo'>
        <h2 className="margin-bottom">{location?.name}</h2>
        <ul>
            <li className='display-text'><span className="bold">Type:</span> {location?.type}</li>
            <li className='display-text'><span className="bold">Dimension:</span> <p>{location?.dimension}</p></li>
            <li className='display-text'><span className="bold">Population:</span> <p>{location?.residents?.length}</p></li>
        </ul>
    </article>
  )
}
