import { Link } from 'react-router-dom'
import './getBack.css'
import { IoMdArrowBack } from 'react-icons/io'

const GetBack = () => {
  return (
    <Link to='/' style={{ textDecoration: 'none' }}>            
      <div className='arrowBack'>
            {<IoMdArrowBack />}
      </div>
    </Link>
  )
}

export default GetBack