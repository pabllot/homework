import { useState } from "react"
import Button from "../button/Button"

const lessonOne = [
  {number: 1, question: 'eu como frango', answer: 'i eat chicken'},
  {number: 2, question: 'voce bebe agua', answer: 'you drink water'},
  {number: 3, question: 'eu como frango', answer: 'i eat chicken'},
  {number: 4, question: 'eu como frango', answer: 'i eat chicken'},
  {number: 5, question: 'eu como frango', answer: 'i eat chicken'},
  {number: 6, question: 'eu como frango', answer: 'i eat chicken'},
  {number: 7, question: 'eu como frango', answer: 'i eat chicken'},
  {number: 8, question: 'eu como frango', answer: 'i eat chicken'},
  {number: 9, question: 'eu como frango', answer: 'i eat chicken'},
  {number: 10, question: 'eu como frango', answer: 'i eat chicken'}
]
const Questions = () => {
    const [answerSubmited, setAnswerSubmited] = useState('')

      return (
        <div>
          {lessonOne.map((item) =>  ( 
          <div key={item.number}>
            <h6>{item.question}</h6>
            <input onChange={(e) => setAnswerSubmited(e.target.value)} />
            <Button answerSubmited={answerSubmited} answer={item.answer} number={item.number}  />
          </div>
           ))}        
        </div>
      )
    }
    
export default Questions