import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import './styles.css'

const lessons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]

const Main = () => {
  return (
    <div className='mainWrapper'>
        <Navbar />
        <div className='LessonContainer'>
        {lessons.map((item:number) => (
          <Link to={`/lesson${item}`} style={{ textDecoration: 'none' }}>
                <p>{item}</p>
            </Link>
        ))}
        </div>
    </div>
  )
}

export default Main