import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Main = () => {
  return (
    <div className='mainWrapper'>
        <Link to='/lesson1' style={{ textDecoration: 'none' }}>
            <p>LESSON 1</p>
        </Link>
        <Link to='/lesson2' style={{ textDecoration: 'none' }} >
            <p>LESSON 2</p>
        </Link>
        <Link to='/lesson3' style={{ textDecoration: 'none' }} >
            <p>LESSON 3</p>
        </Link>
        <Link to='/lesson4' style={{ textDecoration: 'none' }} >
            <p>LESSON 4</p>
        </Link>
        <Link to='/lesson5' style={{ textDecoration: 'none' }} >
            <p>LESSON 5</p>
        </Link>
        <Link to='/lesson6' style={{ textDecoration: 'none' }} >
            <p>LESSON 6</p>
        </Link>
        <Link to='/lesson7' style={{ textDecoration: 'none' }} >
            <p>LESSON 7</p>
        </Link>
        <Link to='/lesson8' style={{ textDecoration: 'none' }} >
            <p>LESSON 8</p>
        </Link>
        <Link to='/lesson9' style={{ textDecoration: 'none' }} >
            <p>LESSON 9</p>
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