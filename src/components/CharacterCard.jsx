import { useState, useEffect } from 'react'
import axios from 'axios'
import React from 'react'
import LoaderImagen from '../helps/img/Loader.svg';

export default function CharacterCard({resident}) {
  const [residents, setResidents] = useState();
  const [loaderCard, setLoaderCard] = useState(true);

  useEffect(() => {
    const URL = resident

    axios.get(URL)
    .then(res => {
      setResidents(res.data);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() =>{
      setLoaderCard(false);
    })
  }, [])

  return (
    <article className='CharacterCard'>
      {
      loaderCard
      ?
      <>
      <figure>
        <img src={LoaderImagen} className='CharacterCard-image' alt={residents?.name}/>
        <p className="CharacterCard-status">no information</p>
      </figure>
      <div>
        <p className='bold margin-top neon'>no information</p>
        <p className='display-text margin-top'><span>Origin</span> <span className='bold'>no information</span></p>
        <p className='display-text margin-top'><span>Episodes</span> <span className='bold margin-bottom'>no information</span></p>
      </div>
      </>
      :
      <>
      <figure>
        <img src={residents?.image} className='CharacterCard-image' alt={residents?.name}/>
        <p className="CharacterCard-status"><span className={residents?.status}></span> {residents?.status}</p>
      </figure>
      <div>
        <p className='bold margin-top neon'>{residents?.name}</p>
        <p className='display-text margin-top'><span>Origin</span> <span className='bold'>{residents?.origin.name}</span></p>
        <p className='display-text margin-top'><span>Episodes</span> <span className='bold margin-bottom'>{residents?.episode.length}</span></p>
      </div>
      </>
      }
    </article>
  )
}
