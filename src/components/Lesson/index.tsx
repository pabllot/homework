import { useState } from "react";
import Button from "../Button/ButtonBox";
import { motion } from "framer-motion";
//@ts-ignore
import GetBack from "../Back";
import { useParams } from "react-router-dom";

export const Lesson = ({ lessonData, title }: any) => {
  let { lesson } = useParams();

  const [answerSubmited, setAnswerSubmited] = useState("");

  return (
    <>
      {lesson === title && (
        <div className="QuestionContainer">
          <GetBack />
          {lessonData.map((item: any) => (
            <motion.div
              className="box"
              key={item.number}
              initial={{ opacity: 0, x: "-20%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delayChildren: 0.2, type: "spring", stiffness: 150 }}
              viewport={{ once: true }}
            >
              <h4>{item.question}</h4>
              <div>
                <input onChange={(e) => setAnswerSubmited(e.target.value)} />
                <Button answerSubmited={answerSubmited} answer={item.answer} number={item.number} />
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </>
  );
};
