import { useState } from "react"
import Button from "../../Button/Button"
import data from '../../data.json'
import GetBack from "../../getBack/getBack"


const Lesson1 = () => {
    const [answerSubmited, setAnswerSubmited] = useState('')

      return (
        <div className="QuestionContainer">
          <GetBack />
          {data.lessons.lesson1.map((item) =>  ( 
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
    
export default Lesson1