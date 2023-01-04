//@ts-ignore
import { mapping } from './components/Imports/Import'
import { BrowserRouter, Route, Routes}  from 'react-router-dom'
import './index.css'
import Main from "./components/Main/Main"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />}/>
      {mapping.map((item: any) => <Route path={`/lesson${item.id}`} element={item.element}/>)} 
    </Routes>
    </BrowserRouter>
  )
}

export default App
