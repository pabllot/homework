import { useState } from "react"
import Button from "../../Button/Button"
import './styles.css'
import data from '../../data.json'

const lessonOne = [
  {number: 1, question: 'eu como frango', answer: 'i eat chicken'},
  {number: 2, question: 'eu como frango', answer: 'i eat chicken'},


]
const Lesson2 = () => {
    const [answerSubmited, setAnswerSubmited] = useState('')

      return (
        <div className="QuestionContainer">
          {data.lessons.lesson2.map((item) =>  ( 
          <div className="box" key={item.number}>
            <h4>{item.question}</h4>
            <div>

            <input onChange={(e) => setAnswerSubmited(e.target.value)} />
            <Button answerSubmited={answerSubmited} answer={item.answer} number={item.number}  />
            </div>
          </div>
           ))}        
        </div>
      )
    }
    
export default Lesson2