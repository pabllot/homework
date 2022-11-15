import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import './styles.css'

const Main = () => {
  return (
    <div className='mainWrapper'>
        <Navbar />
        <Link to='/lesson1' style={{ textDecoration: 'none' }}>
            <p>Lesson 01</p>
        </Link>
        <Link to='/lesson2' style={{ textDecoration: 'none' }} >
            <p>LESSON 02</p>
        </Link>
        <Link to='/lesson3' style={{ textDecoration: 'none' }} >
            <p>LESSON 03</p>
        </Link>
        <Link to='/lesson4' style={{ textDecoration: 'none' }} >
            <p>LESSON 04</p>
        </Link>
        <Link to='/lesson5' style={{ textDecoration: 'none' }} >
            <p>LESSON 05</p>
        </Link>
        <Link to='/lesson6' style={{ textDecoration: 'none' }} >
            <p>LESSON 06</p>
        </Link>
        <Link to='/lesson7' style={{ textDecoration: 'none' }} >
            <p>LESSON 07</p>
        </Link>
        <Link to='/lesson8' style={{ textDecoration: 'none' }} >
            <p>LESSON 08</p>
        </Link>
        <Link to='/lesson9' style={{ textDecoration: 'none' }} >
            <p>LESSON 09</p>
        </Link>
        <Link to='/lesson10 ' style={{ textDecoration: 'none' }}>
            <p>LESSON 10</p>
        </Link>
        <Link to='/lesson11 ' style={{ textDecoration: 'none' }}>
            <p>LESSON 11</p>
        </Link>
        <Link to='/lesson12 ' style={{ textDecoration: 'none' }}>
            <p>LESSON 12</p>
        </Link>
        <Link to='/lesson13 ' style={{ textDecoration: 'none' }}>
            <p>LESSON 13</p>
        </Link>
        <Link to='/lesson14 ' style={{ textDecoration: 'none' }}>
            <p>LESSON 14</p>
        </Link>
        <Link to='/lesson15 ' style={{ textDecoration: 'none' }}>
            <p>LESSON 15</p>
        </Link>
    </div>
  )
}

export default Main