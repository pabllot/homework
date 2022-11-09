import { Link } from 'react-router-dom'
import './getBack.css'

const GetBack = () => {
  return (
    <div className='getbackcontainer'>
        <Link to='/' style={{ textDecoration: 'none' }}>            
            <h1>Voltar</h1>
        </Link>
    </div>
  )
}

export default GetBack