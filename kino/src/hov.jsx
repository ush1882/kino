import { useState } from 'react'
import './App.css'
import kk from './assets/Vector.png'
import poster14 from './assets/14.jpeg'
import film7 from './assets/7.jpg'
import film8 from './assets/8.jpg'
import film9 from './assets/9.jpg'



function HovCards
    () {

    return (
        <>
            <div id='card'>
                <img src={poster14} width={300} height={390} />
                <img src={film7} width={260} />
                <img src={film8} width={260} height={390} />
                <img src={film9} width={265} />


            </div>

        </>
    )
}


export default HovCards