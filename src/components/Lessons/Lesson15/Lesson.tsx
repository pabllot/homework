import { useState } from "react"
//@ts-ignore
import Button from "../../Button/Button"
import data from '../../data.json'
//@ts-ignore
import GetBack from "../../getBack/GetBack"

const Lesson15 = () => {
    const [answerSubmited, setAnswerSubmited] = useState('')

      return (
        <div className="QuestionContainer">
          <GetBack />
          {data.lessons.lesson15.map((item) =>  ( 
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
    
export default Lesson15