import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import "./styles.css";

type Props = {
  answer?: any;
  number?: number;
  answerSubmited?: any;
};

const Button = ({ answer, answerSubmited }: Props) => {
  const [color, setColor] = useState("rgb(0, 0, 0, 0.5)");
  const [btn, setBtn] = useState<any>(null);

  const evaluate = (answer: string, answerSubmited: string) => {
    if (answerSubmited.toLocaleLowerCase() === answer.toLocaleLowerCase()) setColor("green"), setBtn("Right");
    else setColor("rgb(198, 22, 22)"), setBtn("Wrong");
  };
  return (
    <button className="container-button" onClick={() => evaluate(answer, answerSubmited)}>
      {!btn ? (
        <div className="send-icon">
          <FiSend color="rgb(159, 203, 196)" size={20} />
        </div>
      ) : btn === "Right" ? (
        <div className="send-icon">
          <IoCheckmarkDoneOutline color={color} size={20} />
        </div>
      ) : (
        <div className="send-icon">
          <MdClose color={color} size={20} />
        </div>
      )}
    </button>
  );
};

export default Button;
