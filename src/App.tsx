import Lesson1 from "./components/Lessons/Lesson1"
import Lesson2 from "./components/Lessons/Lesson2"
import Lesson3 from "./components/Lessons/Lesson3"
import Lesson4 from "./components/Lessons/Lesson4"
import Lesson5 from "./components/Lessons/Lesson"
import Lesson6 from "./components/Lessons/Lesson6"
import Lesson7 from "./components/Lessons/Lesson7"
import Lesson8 from "./components/Lessons/Lesson8"
import Lesson9 from "./components/Lessons/Lesson9"
import Lesson10 from "./components/Lessons/Lesson10"
import Lesson11 from "./components/Lessons/Lesson11"
import Lesson12 from "./components/Lessons/Lesson12"
import Lesson13 from "./components/Lessons/Lesson13"
import Lesson14 from "./components/Lessons/Lesson14"
import Lesson15 from "./components/Lessons/Lesson15"
import { BrowserRouter, Route, Routes}  from 'react-router-dom'
import './index.css'
import Main from "./components/Main/Main"
import Lesson16 from "./components/Lessons/lesson16"

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
  
    </Routes>
    </BrowserRouter>
  )
}

export default App
