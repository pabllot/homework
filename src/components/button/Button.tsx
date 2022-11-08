import React, { useState } from 'react'

type Props = {
    answer: string;
    number: number;

    answerSubmited: string;
}

const Button = ({answer, number, answerSubmited}: Props) => {
    const [color, setColor] = useState('gray')


    const magic = (numberr: number) => {
        if (numberr === number)
        setColor('green')
        else 
        setColor('red')
    }

    const evaluate = (anwerMap: string, id: number, answerSubmited: string) => {
        if (answerSubmited.toLocaleLowerCase() === anwerMap)
        magic(number), console.log(id)
        else setColor('red')
      } 
  return (
    <button style={{background: color}}  onClick={() => evaluate(answer, number, answerSubmited)}>
        send
    </button>
  )
}

export default Button