import { useState } from 'react'

type Props = {
    answer?: any;
    number?: number;
    answerSubmited?: any;
}

const Button = ({answer, number, answerSubmited}: Props) => {
    const [color, setColor] = useState('rgb(0, 0, 0, 0.5)')
    const [btn, setBtn] = useState('confirm')

    const evaluate = (answer: string, answerSubmited: string) => {
        if (answerSubmited.toLocaleLowerCase() === answer)
        setColor('green'), setBtn('Right')
        else setColor('red'), setBtn('Wrong')
      } 
  return (
    <button  style={{backgroundColor: color, color: 'white', fontFamily: 'Poppins', fontWeight: '200', width: '4rem', height:'2rem',  borderRadius: '50px',  outline: 'none', border:'none'}}  onClick={() => evaluate(answer, answerSubmited)}>
        {btn}
    </button>
  )
}

export default Button
