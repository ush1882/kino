import { useState } from 'react'
import './kassA.css'
import film7 from './assets/gip.jpg'
import film9 from './assets/kto.jpg'
import film8 from './assets/sp.jpg'
import film10 from './assets/ven.jpg'


function KassA
() {

  return (
    <>
        <div id='card'>
        <img src={film9} width={300} height={390}/>
        <img src={film7} width={260} height={391}/>
        <img src={film8} width={260} height={390}/>
        <img src={film10} width={265}/>

        
        </div>
        
    </>
  )
}


export default KassA