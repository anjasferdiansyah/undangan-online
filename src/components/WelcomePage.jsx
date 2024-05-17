import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types

const slideUp = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: "-100vh",
    opacity: 0,
  },
};

// eslint-disable-next-line react/prop-types
const WelcomePage = ({ buttonRef, handleOpen }) => {
  const [searchParams] = useSearchParams();

  const namaTamu = searchParams.get("nama");

  return (
    <motion.section
      variants={slideUp}
      initial="initial"
      exit="exit"
      transition={{ duration: 0.5 }}
      className="h-screen w-full flex flex-col gap-2 justify-center items-center absolute before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[url('/img/nikah.jpg')] before:bg-cover before:content-[''] before:-z-10"
    >
      <h1 className="text-3xl font-bold">The Wedding of</h1>
      <h1 className="text-6xl md:text-7xl font-playfair [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)] text-sky-700">
        Nira & Anjas
      </h1>
      <p className="text-lg font-semibold">
        Kepada Yth. Bpk/Ibu/Saudara/Saudari
      </p>
      <h1 className="text-3xl font-semibold">{namaTamu}</h1>
      <button
        ref={buttonRef}
        className=" bg-slate-500 px-2 py-1 rounded mt-10"
        onClick={handleOpen}
      >
        Buka Undangan
      </button>
    </motion.section>
  );
};

export default WelcomePage;
