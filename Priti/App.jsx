import './App.css'
import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import About from './component/about'
import Main from './component/main'
function App() {

  return (
    <>
     <Router>
         <Routes>
         <Route path='/about' element={<About/>}></Route>
        <Route path='/' element={<Main/>}></Route>
        </Routes>
    </Router>
    </>
  )
}
export default App


