import { useState } from 'react'
import './App.css'
import log from './assets/logotip.svg'
import MovieCard from './moviecard'
import PersonCards from './persons'
import PercjcCard from './percjc'
import XerenCard from './Xeren'
import './app2.jsx'
import { Navigate, useNavigate } from 'react-router-dom'
import Person from './tt'
import Film_niz from './hov'
import Kassa from './kassa_sobor'

function App() {
  const navigate = useNavigate()
  return (
    <>
      <header>
        <div id='logo'>
          <img src={log} alt="" />
        </div>
        <div id='shlak'>
          <h2>Афиша</h2>
          <h2>Медиа</h2>
          <h2>Фильмы</h2>
          <h2>Актеры</h2>
          <h2>Новости</h2>
          <h2>Подборки</h2>
          <h2>Категории</h2>
        </div>
        <div id='knopki'>
          <button id='poisk'></button>
          <button id='vhod'>Войти</button>

        </div>



      </header>

      <main>
        <div id='top_bar'>
          <h1>Сeйчас в кино </h1>
          <hr />
          <ul>
            <li>Все</li>
            <li>Боевики</li>
            <li>Приключения</li>
            <li>Комедии</li>
            <li>Фантастика</li>
            <li>Триллеры</li>
            <li>Драма</li>
          </ul>
        </div>
        <div id='card'>
          <MovieCard nav={navigate} movie={'/moviepage'}/>
        </div>



        <div id='fce'>
          <button id='vhod'>Все фильмы</button>
        </div>


        <div id='top_b'>
          <h1>Сeйчас в кино </h1>
          <ul><li>Все трейлеры ➝</li></ul>
        </div>

        <div id='fideo'>
          <iframe width="900" height="500"
            src="https://www.youtube.com/embed/VCMaJLwChfs?si=kDUr5xefVcgAUYtu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
       picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>

        <div id='top_b'>
          <h1>Сeйчас в кино </h1>
          <ul><li>Все трейлеры ➝</li></ul>
        </div>


        <div id='fideo_a'>

          <iframe width="300" height="200" src="https://www.youtube.com/embed/OWGuDfAjwmI?si=KC-Zm6cji65hx6dG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width="300" height="200" src="https://www.youtube.com/embed/Qx2GsBHo6u8?si=4A5iXQ8DRQdGWdcL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width="300" height="200" src="https://www.youtube.com/embed/HWYQfwiUM9o?si=eSZh8aXr57ojHaop" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>


        <div id='top_bar'>
          <h1>Популярные фильмы </h1>
          <hr />
          <ul>
            <li>Все время</li>
            <li>2023</li>
            <li>2022</li>
            <li>2021</li>
            <li>2020</li>
            <li>2019</li>
            <li>2018</li>
          </ul>
        </div>
        <div id='card_2'>
          <PersonCards />

        </div>



        <div id='top_bar'>
          <h1>Популярные персоны </h1>
          <ul>
            <li>За год</li>
            <li>За месяц</li>
            <li>За неделю</li>
          </ul>
        </div>
        <div id=''>
          <div id='card'>
            <Person />
            <div id='people'>
              <div id='people_list'>
                <p>Тинтро Брасс</p>
                <h3>87 лет</h3>
                <h4 id='mesto'>3-е место</h4>
                <hr />

                <p>Джеки Чан</p>
                <h3>66 лет</h3>
                <h4 id='mesto'>4-е место</h4>
                <hr />

                <p>Том Харди</p>
                <h3>42 года</h3>
                <h4 id='mesto'>5-е место</h4>
                <hr />

                <p>Акшай Кумар</p>
                <h3>52 года</h3>
                <h4 id='mesto'>6-е место</h4>
              </div>
            </div>
          </div>
        </div>

        <div id='top_bar'>
          <div id='shlak'>
            <h2>←</h2>
            <ul>
              <li>2/5 </li>
            </ul>
            <h2>➝</h2>
          </div>
        </div>


        <div id='top_bar'>
          <h1>Последнии новости </h1>
          <ul>
            <li>Все новости ➝</li>
          </ul>
        </div>
        <div id='fideo_b'>
          <iframe width="800" height="470" src="https://www.youtube.com/embed/X-BmKPzS0rc?si=uYTekJ2iclWTAAsz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <div id='card_1'>
            <PercjcCard />
            <PercjcCard />
            <PercjcCard />
            <PercjcCard />
          </div>
        </div>

        <div id='top_bar'>
          <h1>Ожидаемые новинки </h1>
          <div id='shlak'>
            <h2>←</h2>
            <ul>
              <li>2/5 </li>
            </ul>
            <h2>➝</h2>
          </div>
        </div>

        <div id='card'>
          <Film_niz />

        </div>
        <div id='top_bar'>
          <h1>Кассовые сборы </h1>
          <h4>13 марта - 15 марта</h4>
          <hr />
          <ul>
            <li>Россия</li>
            <li>Весь мир</li>
            <li>Приключения</li>
            <li>США и Канада</li>
          </ul>
        </div>



        <div id='card'>
          <Kassa />
        </div>

      </main>



      <div className='emale'>

      <div id='top_bar'>
        <h2>Кассовые сборы </h2>
      </div>
      <div id='top_bar'>
        <h1>Подпишитесь на E-mail рассылку  </h1>
      </div>
      <div id='top_bar'>
        <h2> Если хотите быть в курсе последних событий новостей и новинок коно -  </h2>
      </div>
      <div id='top_bar'>
        <h2> заполните форму ниже и оформите бесплатную E-mail рассылку!  </h2>
      </div>

     
        <div id='cnopcaa'>
          <label for="email"></label>
          <input type="email" placeholder="Введите свой E-mail адрес" id="email" pattern=".+@globex\.com" size="30" required />
          <button id='cnop'> Подписаться</button>
        </div>
        <div id='vd'>
          <label ><input type="checkbox" class="checkbox" />Соглашаюсь на условия <p> политики конфиденциальности  </p> </label>
        </div>
      </div>
    </>
  )
}


export default App
