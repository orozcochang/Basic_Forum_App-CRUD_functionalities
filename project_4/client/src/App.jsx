import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import {HashRouter as Router, Routes, Route, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from 'react-bootstrap/NavBar'
import Nav from 'react-bootstrap/Nav'
import HomePage from './components/HomePage'
import PostsPage from './components/PostsPage'
import CategoriesPage from './components/CategoriesPage'

function App() {
  function getCookie(name){
    let cookieValue = null
    if ( document.cookie && document.cookie !== ''){
      const cookies = document.cookie.split(';')
      for (let i = 0; i < cookies.length; i++){
        const cookie = cookies[i].trim()
        if (cookie.substring(0,name.length +1)===(name + '=')){
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1))
          break
        }
      }
    }
    return cookieValue
  }
  const csrftoken = getCookie('csrftoken')
  axios.defaults.headers.common["X-CSRFToken"]=csrftoken
  

  return (
    <div className="App">
      <h1>My Page</h1>
      

      <Router>
        <NavBar>
          
          <Link to='/'> Home </Link>
          <Link to='/categories'> Categories </Link>
          <Link to='/posts'> Posts </Link>

        </NavBar>
        
        <Routes>
          <Route path='' element={<HomePage />}/>
          <Route path='/categories' element={<CategoriesPage />}/>
          <Route path='/posts' element={<PostsPage />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
