//@ts-ignore
import { Lesson1, Lesson2, Lesson3, Lesson4, Lesson5, Lesson6, Lesson7, Lesson8, Lesson9, Lesson10, Lesson11, Lesson12, Lesson13, Lesson14, Lesson15, Lesson16, Lesson17, Lesson18, Lesson19, Lesson20 } from './components/Imports/Import'
import { BrowserRouter, Route, Routes}  from 'react-router-dom'
import './index.css'
import Main from "./components/Main/Main"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />}/>
      <Route path='/lesson1' element={<Lesson1 />}/>
      <Route path='/lesson2' element={<Lesson2 />}/>
      <Route path='/lesson3' element={<Lesson3 />}/>
      <Route path='/lesson4' element={<Lesson4 />}/>
      <Route path='/lesson5' element={<Lesson5 />}/>
      <Route path='/lesson6' element={<Lesson6 />}/>
      <Route path='/lesson7' element={<Lesson7 />}/>
      <Route path='/lesson8' element={<Lesson8 />}/>
      <Route path='/lesson9' element={<Lesson9 />}/>
      <Route path='/lesson10' element={<Lesson10 />}/>
      <Route path='/lesson11' element={<Lesson11 />}/>
      <Route path='/lesson12' element={<Lesson12 />}/>
      <Route path='/lesson13' element={<Lesson13 />}/>
      <Route path='/lesson14' element={<Lesson14 />}/>
      <Route path='/lesson15' element={<Lesson15 />}/>
      <Route path='/lesson16' element={<Lesson16 />}/>
      <Route path='/lesson17' element={<Lesson17 />}/>
      <Route path='/lesson18' element={<Lesson18 />}/>
      <Route path='/lesson19' element={<Lesson19 />}/>
      <Route path='/lesson20' element={<Lesson20 />}/> 
  
    </Routes>
    </BrowserRouter>
  )
}

export default App
