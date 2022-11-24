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
            <p>Lesson 02</p>
        </Link>
        <Link to='/lesson3' style={{ textDecoration: 'none' }} >
            <p>Lesson 03</p>
        </Link>
        <Link to='/lesson4' style={{ textDecoration: 'none' }} >
            <p>Lesson 04</p>
        </Link>
        <Link to='/lesson5' style={{ textDecoration: 'none' }} >
            <p>Lesson 05</p>
        </Link>
        <Link to='/lesson6' style={{ textDecoration: 'none' }} >
            <p>Lesson 06</p>
        </Link>
        <Link to='/lesson7' style={{ textDecoration: 'none' }} >
            <p>Lesson 07</p>
        </Link>
        <Link to='/lesson8' style={{ textDecoration: 'none' }} >
            <p>Lesson 08</p>
        </Link>
        <Link to='/lesson9' style={{ textDecoration: 'none' }} >
            <p>Lesson 09</p>
        </Link>
        <Link to='/lesson10 ' style={{ textDecoration: 'none' }}>
            <p>Lesson 10</p>
        </Link>
        <Link to='/lesson11 ' style={{ textDecoration: 'none' }}>
            <p>Lesson 11</p>
        </Link>
        <Link to='/lesson12 ' style={{ textDecoration: 'none' }}>
            <p>Lesson 12</p>
        </Link>
        <Link to='/lesson13 ' style={{ textDecoration: 'none' }}>
            <p>Lesson 13</p>
        </Link>
        <Link to='/lesson14 ' style={{ textDecoration: 'none' }}>
            <p>Lesson 14</p>
        </Link>
        <Link to='/lesson15 ' style={{ textDecoration: 'none' }}>
            <p>Lesson 15</p>
        </Link>
        <Link to='/lesson16 ' style={{ textDecoration: 'none' }}>
            <p>Lesson 16</p>
        </Link>
        <Link to='/lesson17 ' style={{ textDecoration: 'none' }}>
            <p>Lesson 17</p>
        </Link>
        <Link to='/lesson18 ' style={{ textDecoration: 'none' }}>
            <p>Lesson 18</p>
        </Link>
        <Link to='/lesson19 ' style={{ textDecoration: 'none' }}>
            <p>Lesson 19</p>
        </Link>
        <Link to='/lesson20 ' style={{ textDecoration: 'none' }}>
            <p>Lesson 20</p>
        </Link> 
    </div>
  )
}

export default Main