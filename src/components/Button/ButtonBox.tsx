import { useState } from 'react'

type Props = {
    answer?: any;
    number?: number;
    answerSubmited?: any;
}

const Button = ({answer,  answerSubmited}: Props) => {
    const [color, setColor] = useState('rgb(0, 0, 0, 0.5)')
    const [btn, setBtn] = useState('confirm')

    const evaluate = (answer: string, answerSubmited: string) => {
        if (answerSubmited.toLocaleLowerCase() === answer.toLocaleLowerCase())
        setColor('green'), setBtn('Right')
        else setColor('rgb(198, 22, 22)'), setBtn('Wrong')
      } 
  return (
    <button  style={{backgroundColor: color, cursor: 'pointer', color: 'white', fontFamily: 'Poppins', fontWeight: '200', width: '4rem', height:'2rem',  borderRadius: '50px',  outline: 'none', border:'none'}}  onClick={() => evaluate(answer, answerSubmited)}>
        {btn}
    </button>
  )
}

export default Button
