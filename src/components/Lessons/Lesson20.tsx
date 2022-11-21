import { useState } from "react"
//@ts-ignore
import Button from "../Button/ButtonBox"
import data from '../data.json'
//@ts-ignore
import GetBack from "../Back/GetBack"

const Lesson20 = () => {
    const [answerSubmited, setAnswerSubmited] = useState('')

      return (
        <div className="QuestionContainer">
          <GetBack />
          {data.lessons.lesson20.map((item) =>  ( 
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
    
export default Lesson20