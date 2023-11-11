import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './app2.css'
import kk from './assets/Vector.png'
import log from './assets/logotip.svg'
import MovieCard from './moviecard'
import PersonCards from './persons'
import PercjcCard from './percjc'
import XerenCard from './Xeren'
import './App'
import { Navigate, useNavigate } from 'react-router-dom'

function App2() {
const navigate = useNavigate()
  return (
    <>
    <header>
      <div id='logo_2'>
      <img src={log} alt="" />
      </div>
      <div id='shlak_2'>
        <h2>Афиша</h2>
        <h2>Медиа</h2>
        <h2>Фильмы</h2>
        <h2>Актеры</h2>
        <h2>Новости</h2>
        <h2>Подборки</h2>
        <h2>Категории</h2>
      </div>
      <div id='knopki_2'>
        <button id='poisk_2'></button>
        <button id='vhod_2' onClick={() => {navigate('/App')}}>Войти</button>
        
      </div>
    </header>

    <div id='card'>
    <XerenCard/>
    <div id='top_bar'>
    <h1 id='oi'> Остров фантазий </h1> 
    <p id='dva'> <h2><li> Содержание</li></h2> 
    <li>Cтудия Blumhouse представляют свой взгляд на «Остров фантазий». <br/>
    Загадочный мистер Рорк воплощает в жизнь самые смелые и тайные мечты своих <br/>
    постояльцев на роскошном труднодоступном тропическом курорте.  <br/>
    Но будут ли готовы гости разгадать тайну острова и спасти свои жизни, когда их фантазии обернутся кошмаром?</li></p>
    </div>

  

    </div>
    <div className='tre'>
    <iframe width="660" height="415" src="https://www.youtube.com/embed/vWeIZ9MjiBs?si=MdjjPWeR5L3wZy0a" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div id='fce'>
      <button id='vhod'>👍</button>
      <button id='vhod'>👎</button>
      <div class="rating-result">
	<span class="active"></span>	
	<span class="active"></span>    
	<span class="active"></span>  
	<span class="active"></span>    
	<span></span>
  <button id='vhod'>💜 </button>
<p>В избраном у 39094 человек</p>
  </div>
    </div>
    <main>
    </main>
    </>
  )
}


export default App2
