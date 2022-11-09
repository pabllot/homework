import Questions from "./components/Question/Question"
import { BrowserRouter, Route, Routes}  from 'react-router-dom'
import './index.css'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Questions />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
