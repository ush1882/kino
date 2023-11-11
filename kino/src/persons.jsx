import { useState } from 'react'
import './App.css'
import kk from './assets/Vector.png'
import poster2 from './assets/11.jpeg'
import film4 from './assets/4.jpg'
import film5 from './assets/5.jpg'
import film6 from './assets/6.jpg'



function PersonCards
() {

  return (
    <>
        <div id='card'>
        <img src={poster2} width={300} height={390}/>
        <img src={film4} width={260}/>
        <img src={film5} width={260} height={390}/>
        <img src={film6} width={265}/>

        
        </div>
        
    </>
  )
}


export default PersonCards
