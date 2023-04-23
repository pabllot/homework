import { Link } from "react-router-dom";
import "./styles.css";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";

const lessons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27];

const Home = () => {
  return (
    <div className="mainWrapper">
      <Navbar />
      <motion.div
        className="LessonContainer"
        initial={{ opacity: 0, x: "-20%" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delayChildren: 0.2, type: "spring", stiffness: 150 }}
        viewport={{ once: true }}
      >
        {lessons.map((item: number) => (
          <Link to={`/lesson${item}`} style={{ textDecoration: "none" }}>
            <p>{item}</p>
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default Home;
