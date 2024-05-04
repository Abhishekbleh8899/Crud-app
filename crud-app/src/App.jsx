
import './App.css'
import AddUser from './components/AddUser'
import AllUsers from './components/AllUsers'
import Home from './components/Home'
import NavBar from './components/NavBar'
import {BrowserRouter,Routes,Route} from'react-router-dom'

function App() {


  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
           <Route path='/' element={<Home/ >} />
         <Route path='/add' element= {<AddUser/>}/>
           <Route path='/all'element={< AllUsers/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
