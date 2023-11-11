import { useState } from 'react'
import './App.css'
import kk from './assets/Vector.png'
import film from './assets/14.jpeg'
import poster2 from './assets/11.jpeg'
import film1 from './assets/1.jpg'
import film2 from './assets/2.jpg'
import film3 from './assets/10.jpg'


function MovieCard({
  nav, movie
}) {

  return (
    <>
        <div id='card'>
         <a onClick={() => { nav(movie) }}><img src={film} width={260} height={390} /></a>
        <img src={film1} width={260} />
        <img src={film2} width={260} />
        <img src={film3} width={260} height={390} />
        </div>
        
    
    </>
  )
}


export default MovieCard
