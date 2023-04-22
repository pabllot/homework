import { useState } from "react";
import Button from "../Button/ButtonBox";
import data from "../data.json";
import { motion } from "framer-motion";
//@ts-ignore
import GetBack from "../Back/GetBack";

export const Lesson1 = () => {
  const [answerSubmited, setAnswerSubmited] = useState("");

  return (
    <div className="QuestionContainer">
      <GetBack />
      {data.lessons.lesson1.map((item) => (
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
  );
};

export const Lesson2 = () => {
  const [answerSubmited, setAnswerSubmited] = useState("");

  return (
    <div className="QuestionContainer">
      <GetBack />
      {data.lessons.lesson2.map((item) => (
        <div
          className="box"
          key={item.number}
          //  initial={{ opacity: 0, x: "-20%" }}
          //     whileInView={{ opacity: 1, x: 0 }}
          //     transition={{ delayChildren: 0.2, type: "spring", stiffness: 150 }}
          //     viewport={{ once: true }}
        >
          <h4>{item.question}</h4>
          <div>
            <input onChange={(e) => setAnswerSubmited(e.target.value)} />
            <Button answerSubmited={answerSubmited} answer={item.answer} number={item.number} />
          </div>
        </div>
      ))}
    </div>
  );
};

export const Lesson3 = () => {
  const [answerSubmited, setAnswerSubmited] = useState("");

  return (
    <div className="QuestionContainer">
      <GetBack />
      {data.lessons.lesson3.map((item) => (
        <div
          className="box"
          key={item.number}
          //  initial={{ opacity: 0, x: "-20%" }}
          //     whileInView={{ opacity: 1, x: 0 }}
          //     transition={{ delayChildren: 0.2, type: "spring", stiffness: 150 }}
          //     viewport={{ once: true }}
        >
          <h4>{item.question}</h4>
          <div>
            <input onChange={(e) => setAnswerSubmited(e.target.value)} />
            <Button answerSubmited={answerSubmited} answer={item.answer} number={item.number} />
          </div>
        </div>
      ))}
    </div>
  );
};

export const Lesson4 = () => {
  const [answerSubmited, setAnswerSubmited] = useState("");

  return (
    <div className="QuestionContainer">
      <GetBack />
      {data.lessons.lesson4.map((item) => (
        <div
          className="box"
          key={item.number}
          //  initial={{ opacity: 0, x: "-20%" }}
          //     whileInView={{ opacity: 1, x: 0 }}
          //     transition={{ delayChildren: 0.2, type: "spring", stiffness: 150 }}
          //     viewport={{ once: true }}
        >
          <h4>{item.question}</h4>
          <div>
            <input onChange={(e) => setAnswerSubmited(e.target.value)} />
            <Button answerSubmited={answerSubmited} answer={item.answer} number={item.number} />
          </div>
        </div>
      ))}
    </div>
  );
};

export const Lesson5 = () => {
  const [answerSubmited, setAnswerSubmited] = useState("");

  return (
    <div className="QuestionContainer">
      <GetBack />
      {data.lessons.lesson5.map((item) => (
        <div
          className="box"
          key={
            item.number
            //  initial={{ opacity: 0, x: "-20%" }}
            //     whileInView={{ opacity: 1, x: 0 }}
            //     transition={{ delayChildren: 0.2, type: "spring", stiffness: 150 }}
            //     viewport={{ once: true }}
          }
        >
          <h4>{item.question}</h4>
          <div>
            <input onChange={(e) => setAnswerSubmited(e.target.value)} />
            <Button answerSubmited={answerSubmited} answer={item.answer} number={item.number} />
          </div>
        </div>
      ))}{" "}
      motion.
    </div>
  );
};

export const Lesson6 = () => {
  const [answerSubmited, setAnswerSubmited] = useState("");

  return (
    <div className="QuestionContainer">
      <GetBack />
      {data.lessons.lesson6.map((item) => (
        <div
          className="box"
          key={item.number}
          //  initial={{ opacity: 0, x: "-20%" }}
          //     whileInView={{ opacity: 1, x: 0 }}
          //     transition={{ delayChildren: 0.2, type: "spring", stiffness: 150 }}
          //     viewport={{ once: true }}
        >
          <h4>{item.question}</h4>
          <div>
            <input onChange={(e) => setAnswerSubmited(e.target.value)} />
            <Button answerSubmited={answerSubmited} answer={item.answer} number={item.number} />
          </div>
        </div>
      ))}
    </div>
  );
};

export const Lesson7 = () => {
  const [answerSubmited, setAnswerSubmited] = useState("");

  return (
    <div className="QuestionContainer">
      <GetBack />
      {data.lessons.lesson7.map((item) => (
        <div
          className="box"
          key={item.number}
          //  initial={{ opacity: 0, x: "-20%" }}
          //     whileInView={{ opacity: 1, x: 0 }}
          //     transition={{ delayChildren: 0.2, type: "spring", stiffness: 150 }}
          //     viewport={{ once: true }}
        >
          <h4>{item.question}</h4>
          <div>
            <input onChange={(e) => setAnswerSubmited(e.target.value)} />
            <Button answerSubmited={answerSubmited} answer={item.answer} number={item.number} />
          </div>
        </div>
      ))}
    </div>
  );
};

export const Lesson8 = () => {
  const [answerSubmited, setAnswerSubmited] = useState("");

  return (
    <div className="QuestionContainer">
      <GetBack />
      {data.lessons.lesson8.map((item) => (
        <div
          className="box"
          key={item.number}
          //  initial={{ opacity: 0, x: "-20%" }}
          //     whileInView={{ opacity: 1, x: 0 }}
          //     transition={{ delayChildren: 0.2, type: "spring", stiffness: 150 }}
          //     viewport={{ once: true }}
        >
          <h4>{item.question}</h4>
          <div>
            <input onChange={(e) => setAnswerSubmited(e.target.value)} />
            <Button answerSubmited={answerSubmited} answer={item.answer} number={item.number} />
          </div>
        </div>
      ))}
    </div>
  );
};

export const Lesson9 = () => {
  const [answerSubmited, setAnswerSubmited] = useState("");

  return (
    <div className="QuestionContainer">
      <GetBack />
      {data.lessons.lesson9.map((item) => (
        <div
          className="box"
          key={item.number}
          //  initial={{ opacity: 0, x: "-20%" }}
          //     whileInView={{ opacity: 1, x: 0 }}
          //     transition={{ delayChildren: 0.2, type: "spring", stiffness: 150 }}
          //     viewport={{ once: true }}
        >
          <h4>{item.question}</h4>
          <div>
            <input onChange={(e) => setAnswerSubmited(e.target.value)} />
            <Button answerSubmited={answerSubmited} answer={item.answer} number={item.number} />
          </div>
        </div>
      ))}
    </div>
  );
};

export const Lesson10 = () => {
  const [answerSubmited, setAnswerSubmited] = useState("");

  return (
    <div className="QuestionContainer">
      <GetBack />
      {data.lessons.lesson10.map((item) => (
        <div
          className="box"
          key={item.number}
          //  initial={{ opacity: 0, x: "-20%" }}
          //     whileInView={{ opacity: 1, x: 0 }}
          //     transition={{ delayChildren: 0.2, type: "spring", stiffness: 150 }}
          //     viewport={{ once: true }}
        >
          <h4>{item.question}</h4>
          <div>
            <input onChange={(e) => setAnswerSubmited(e.target.value)} />
            <Button answerSubmited={answerSubmited} answer={item.answer} number={item.number} />
          </div>
        </div>
      ))}
    </div>
  );
};

export const Lesson11 = () => {
  const [answerSubmited, setAnswerSubmited] = useState("");

  return (
    <div className="QuestionContainer">
      <GetBack />
      {data.lessons.lesson11.map((item) => (
        <div
          className="box"
          key={item.number}
          //  initial={{ opacity: 0, x: "-20%" }}
          //     whileInView={{ opacity: 1, x: 0 }}
          //     transition={{ delayChildren: 0.2, type: "spring", stiffness: 150 }}
          //     viewport={{ once: true }}
        >
          <h4>{item.question}</h4>
          <div>
            <input onChange={(e) => setAnswerSubmited(e.target.value)} />
            <Button answerSubmited={answerSubmited} answer={item.answer} number={item.number} />
          </div>
        </div>
      ))}
    </div>
  );
};

export const Lesson12 = () => {
  const [answerSubmited, setAnswerSubmited] = useState("");

  return (
    <div className="QuestionContainer">
      <GetBack />
      {data.lessons.lesson12.map((item) => (
        <div
          className="box"
          key={item.number}
          //  initial={{ opacity: 0, x: "-20%" }}
          //     whileInView={{ opacity: 1, x: 0 }}
          //     transition={{ delayChildren: 0.2, type: "spring", stiffness: 150 }}
          //     viewport={{ once: true }}
        >
          <h4>{item.question}</h4>
          <div>
            <input onChange={(e) => setAnswerSubmited(e.target.value)} />
            <Button answerSubmited={answerSubmited} answer={item.answer} number={item.number} />
          </div>
        </div>
      ))}
    </div>
  );
};

export const Lesson13 = () => {
  const [answerSubmited, setAnswerSubmited] = useState("");

  return (
    <div className="QuestionContainer">
      <GetBack />
      {data.lessons.lesson13.map((item) => (
        <div
          className="box"
          key={item.number}
          //  initial={{ opacity: 0, x: "-20%" }}
          //     whileInView={{ opacity: 1, x: 0 }}
          //     transition={{ delayChildren: 0.2, type: "spring", stiffness: 150 }}
          //     viewport={{ once: true }}
        >
          <h4>{item.question}</h4>
          <div>
            <input onChange={(e) => setAnswerSubmited(e.target.value)} />
            <Button answerSubmited={answerSubmited} answer={item.answer} number={item.number} />
          </div>
        </div>
      ))}
    </div>
  );
};

export const Lesson14 = () => {
  const [answerSubmited, setAnswerSubmited] = useState("");

  return (
    <div className="QuestionContainer">
      <GetBack />
      {data.lessons.lesson14.map((item) => (
        <div
          className="box"
          key={item.number}
          //  initial={{ opacity: 0, x: "-20%" }}
          //     whileInView={{ opacity: 1, x: 0 }}
          //     transition={{ delayChildren: 0.2, type: "spring", stiffness: 150 }}
          //     viewport={{ once: true }}
        >
          <h4>{item.question}</h4>
          <div>
            <input onChange={(e) => setAnswerSubmited(e.target.value)} />
            <Button answerSubmited={answerSubmited} answer={item.answer} number={item.number} />
          </div>
        </div>
      ))}
    </div>
  );
};

export const Lesson15 = () => {
  const [answerSubmited, setAnswerSubmited] = useState("");

  return (
    <div className="QuestionContainer">
      <GetBack />
      {data.lessons.lesson15.map((item) => (
        <div
          className="box"
          key={item.number}
          //  initial={{ opacity: 0, x: "-20%" }}
          //     whileInView={{ opacity: 1, x: 0 }}
          //     transition={{ delayChildren: 0.2, type: "spring", stiffness: 150 }}
          //     viewport={{ once: true }}
        >
          <h4>{item.question}</h4>
          <div>
            <input onChange={(e) => setAnswerSubmited(e.target.value)} />
            <Button answerSubmited={answerSubmited} answer={item.answer} number={item.number} />
          </div>
        </div>
      ))}
    </div>
  );
};

export const Lesson16 = () => {
  const [answerSubmited, setAnswerSubmited] = useState("");

  return (
    <div className="QuestionContainer">
      <GetBack />
      {data.lessons.lesson16.map((item) => (
        <div
          className="box"
          key={item.number}
          //  initial={{ opacity: 0, x: "-20%" }}
          //     whileInView={{ opacity: 1, x: 0 }}
          //     transition={{ delayChildren: 0.2, type: "spring", stiffness: 150 }}
          //     viewport={{ once: true }}
        >
          <h4>{item.question}</h4>
          <div>
            <input onChange={(e) => setAnswerSubmited(e.target.value)} />
            <Button answerSubmited={answerSubmited} answer={item.answer} number={item.number} />
          </div>
        </div>
      ))}
    </div>
  );
};

export const Lesson17 = () => {
  const [answerSubmited, setAnswerSubmited] = useState("");

  return (
    <div className="QuestionContainer">
      <GetBack />
      {data.lessons.lesson17.map((item) => (
        <div
          className="box"
          key={item.number}
          //  initial={{ opacity: 0, x: "-20%" }}
          //     whileInView={{ opacity: 1, x: 0 }}
          //     transition={{ delayChildren: 0.2, type: "spring", stiffness: 150 }}
          //     viewport={{ once: true }}
        >
          <h4>{item.question}</h4>
          <div>
            <input onChange={(e) => setAnswerSubmited(e.target.value)} />
            <Button answerSubmited={answerSubmited} answer={item.answer} number={item.number} />
          </div>
        </div>
      ))}
    </div>
  );
};

export const Lesson18 = () => {
  const [answerSubmited, setAnswerSubmited] = useState("");

  return (
    <div className="QuestionContainer">
      <GetBack />
      {data.lessons.lesson18.map((item) => (
        <div
          className="box"
          key={item.number}
          //  initial={{ opacity: 0, x: "-20%" }}
          //     whileInView={{ opacity: 1, x: 0 }}
          //     transition={{ delayChildren: 0.2, type: "spring", stiffness: 150 }}
          //     viewport={{ once: true }}
        >
          <h4>{item.question}</h4>
          <div>
            <input onChange={(e) => setAnswerSubmited(e.target.value)} />
            <Button answerSubmited={answerSubmited} answer={item.answer} number={item.number} />
          </div>
        </div>
      ))}
    </div>
  );
};

export const Lesson19 = () => {
  const [answerSubmited, setAnswerSubmited] = useState("");

  return (
    <div className="QuestionContainer">
      <GetBack />
      {data.lessons.lesson19.map((item) => (
        <div
          className="box"
          key={item.number}
          //  initial={{ opacity: 0, x: "-20%" }}
          //     whileInView={{ opacity: 1, x: 0 }}
          //     transition={{ delayChildren: 0.2, type: "spring", stiffness: 150 }}
          //     viewport={{ once: true }}
        >
          <h4>{item.question}</h4>
          <div>
            <input onChange={(e) => setAnswerSubmited(e.target.value)} />
            <Button answerSubmited={answerSubmited} answer={item.answer} number={item.number} />
          </div>
        </div>
      ))}
    </div>
  );
};

export const Lesson20 = () => {
  const [answerSubmited, setAnswerSubmited] = useState("");

  return (
    <div className="QuestionContainer">
      <GetBack />
      {data.lessons.lesson20.map((item) => (
        <div
          className="box"
          key={item.number}
          //  initial={{ opacity: 0, x: "-20%" }}
          //     whileInView={{ opacity: 1, x: 0 }}
          //     transition={{ delayChildren: 0.2, type: "spring", stiffness: 150 }}
          //     viewport={{ once: true }}
        >
          <h4>{item.question}</h4>
          <div>
            <input onChange={(e) => setAnswerSubmited(e.target.value)} />
            <Button answerSubmited={answerSubmited} answer={item.answer} number={item.number} />
          </div>
        </div>
      ))}
    </div>
  );
};
export const Lesson21 = () => {
  const [answerSubmited, setAnswerSubmited] = useState("");

  return (
    <div className="QuestionContainer">
      <GetBack />
      {data.lessons.lesson21.map((item) => (
        <div
          className="box"
          key={item.number}
          //  initial={{ opacity: 0, x: "-20%" }}
          //     whileInView={{ opacity: 1, x: 0 }}
          //     transition={{ delayChildren: 0.2, type: "spring", stiffness: 150 }}
          //     viewport={{ once: true }}
        >
          <h4>{item.question}</h4>
          <div>
            <input onChange={(e) => setAnswerSubmited(e.target.value)} />
            <Button answerSubmited={answerSubmited} answer={item.answer} number={item.number} />
          </div>
        </div>
      ))}
    </div>
  );
};
export const Lesson22 = () => {
  const [answerSubmited, setAnswerSubmited] = useState("");

  return (
    <div className="QuestionContainer">
      <GetBack />
      {data.lessons.lesson22.map((item) => (
        <div
          className="box"
          key={item.number}
          //  initial={{ opacity: 0, x: "-20%" }}
          //     whileInView={{ opacity: 1, x: 0 }}
          //     transition={{ delayChildren: 0.2, type: "spring", stiffness: 150 }}
          //     viewport={{ once: true }}
        >
          <h4>{item.question}</h4>
          <div>
            <input onChange={(e) => setAnswerSubmited(e.target.value)} />
            <Button answerSubmited={answerSubmited} answer={item.answer} number={item.number} />
          </div>
        </div>
      ))}
    </div>
  );
};
export const Lesson23 = () => {
  const [answerSubmited, setAnswerSubmited] = useState("");

  return (
    <div className="QuestionContainer">
      <GetBack />
      {data.lessons.lesson23.map((item) => (
        <div
          className="box"
          key={item.number}
          //  initial={{ opacity: 0, x: "-20%" }}
          //     whileInView={{ opacity: 1, x: 0 }}
          //     transition={{ delayChildren: 0.2, type: "spring", stiffness: 150 }}
          //     viewport={{ once: true }}
        >
          <h4>{item.question}</h4>
          <div>
            <input onChange={(e) => setAnswerSubmited(e.target.value)} />
            <Button answerSubmited={answerSubmited} answer={item.answer} number={item.number} />
          </div>
        </div>
      ))}
    </div>
  );
};
export const Lesson24 = () => {
  const [answerSubmited, setAnswerSubmited] = useState("");

  return (
    <div className="QuestionContainer">
      <GetBack />
      {data.lessons.lesson24.map((item) => (
        <div
          className="box"
          key={item.number}
          //  initial={{ opacity: 0, x: "-20%" }}
          //     whileInView={{ opacity: 1, x: 0 }}
          //     transition={{ delayChildren: 0.2, type: "spring", stiffness: 150 }}
          //     viewport={{ once: true }}
        >
          <h4>{item.question}</h4>
          <div>
            <input onChange={(e) => setAnswerSubmited(e.target.value)} />
            <Button answerSubmited={answerSubmited} answer={item.answer} number={item.number} />
          </div>
        </div>
      ))}
    </div>
  );
};
export const Lesson25 = () => {
  const [answerSubmited, setAnswerSubmited] = useState("");

  return (
    <div className="QuestionContainer">
      <GetBack />
      {data.lessons.lesson25.map((item) => (
        <div
          className="box"
          key={item.number}
          //  initial={{ opacity: 0, x: "-20%" }}
          //     whileInView={{ opacity: 1, x: 0 }}
          //     transition={{ delayChildren: 0.2, type: "spring", stiffness: 150 }}
          //     viewport={{ once: true }}
        >
          <h4>{item.question}</h4>
          <div>
            <input onChange={(e) => setAnswerSubmited(e.target.value)} />
            <Button answerSubmited={answerSubmited} answer={item.answer} number={item.number} />
          </div>
        </div>
      ))}
    </div>
  );
};
export const Lesson26 = () => {
  const [answerSubmited, setAnswerSubmited] = useState("");

  return (
    <div className="QuestionContainer">
      <GetBack />
      {data.lessons.lesson26.map((item) => (
        <div
          className="box"
          key={item.number}
          //  initial={{ opacity: 0, x: "-20%" }}
          //     whileInView={{ opacity: 1, x: 0 }}
          //     transition={{ delayChildren: 0.2, type: "spring", stiffness: 150 }}
          //     viewport={{ once: true }}
        >
          <h4>{item.question}</h4>
          <div>
            <input onChange={(e) => setAnswerSubmited(e.target.value)} />
            <Button answerSubmited={answerSubmited} answer={item.answer} number={item.number} />
          </div>
        </div>
      ))}
    </div>
  );
};
export const Lesson27 = () => {
  const [answerSubmited, setAnswerSubmited] = useState("");

  return (
    <div className="QuestionContainer">
      <GetBack />
      {data.lessons.lesson27.map((item) => (
        <div
          className="box"
          key={item.number}
          //  initial={{ opacity: 0, x: "-20%" }}
          //     whileInView={{ opacity: 1, x: 0 }}
          //     transition={{ delayChildren: 0.2, type: "spring", stiffness: 150 }}
          //     viewport={{ once: true }}
        >
          <h4>{item.question}</h4>
          <div>
            <input onChange={(e) => setAnswerSubmited(e.target.value)} />
            <Button answerSubmited={answerSubmited} answer={item.answer} number={item.number} />
          </div>
        </div>
      ))}
    </div>
  );
};
