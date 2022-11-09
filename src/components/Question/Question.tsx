import { useState } from "react"
import Button from "../Button/Button"
import './styles.css'

const lessonOne = [
  {number: 1, question: 'eu como frango', answer: 'i eat chicken'},
  {number: 1, question: 'eu como frango', answer: 'i eat chicken'},
  {number: 1, question: 'eu como frango', answer: 'i eat chicken'},
  {number: 1, question: 'eu como frango', answer: 'i eat chicken'},
  {number: 1, question: 'eu como frango', answer: 'i eat chicken'},

]
const Questions = () => {
    const [answerSubmited, setAnswerSubmited] = useState('')

      return (
        <div className="QuestionContainer">
          {lessonOne.map((item) =>  ( 
          <div className="box" key={item.number}>
            <h4>{item.question}</h4>
            <input onChange={(e) => setAnswerSubmited(e.target.value)} />
            <Button answerSubmited={answerSubmited} answer={item.answer} number={item.number}  />
          </div>
           ))}        
        </div>
      )
    }
    
export default Questions