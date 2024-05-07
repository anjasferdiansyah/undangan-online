import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { slideUp } from "../utils/anim";
const HomeSection = () => {
  const container = useRef(null);
  const isInView = useInView(container);

  const phrase =
    "“Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang.” (QS. Ar-Ruum: 21)";

  return (
    <section id="home" className="h-screen relative bg-[url('/img/nikah.jpg')]">
      <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-4 justify-center items-center bg-gradient-to-t from-gray-900 to-gray-50/10 px-4">
        <h1 className="text-3xl text-sky-700 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] md:text-5xl font-great">
          Nira & Anjas
        </h1>
        <p ref={container} className="text-center space-x-1">
          {phrase.split(" ").map((word, index) => (
            <span key={index} className="inline-flex relative overflow-hidden">
              <motion.span
                variants={slideUp}
                initial="initial"
                animate={isInView ? "open" : "closed"}
                className={`text-lg text-center ${
                  index === phrase.split(" ").length - 1 ||
                  index === phrase.split(" ").length - 2 ||
                  index === phrase.split(" ").length - 3
                    ? "font-semibold"
                    : ""
                }`}
                custom={index}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </p>
        <p className="text-2xl mt-8">Kamis, 25 Mei 2024</p>
        <div className="w-[30px] h-12 rounded-xl border-2 border-gray-400 justify-center items-center flex">
          <div className="scroll-animation mb-4"></div>
        </div>
        <p>Scroll Down</p>
      </div>
    </section>
  );
};

export default HomeSection;
