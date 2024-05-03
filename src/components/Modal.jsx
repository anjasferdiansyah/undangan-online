import { ChevronLeft, ChevronRight, XIcon } from "lucide-react";
import { motion } from "framer-motion";
// eslint-disable-next-line react/prop-types
const Modal = ({ clickedImage, setClickedImage, handleRight, handleLeft }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-screen z-10 top-0 left-0 fixed bg-black/50"
    >
      <ChevronLeft
        size={40}
        className="absolute top-1/2 z-[99] cursor-pointer text-blue-500 left-0"
        onClick={handleLeft}
      />
      <ChevronRight
        size={40}
        className="absolute cursor-pointer z-[99] top-1/2 text-blue-500 right-0"
        onClick={handleRight}
      />
      <button
        onClick={() => setClickedImage(null)}
        className="absolute top-0 right-0 p-2 text-white"
      >
        <XIcon />
      </button>
      <div
        className="w-3/4 h-3/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={clickedImage}
          alt="modal"
          className="w-full h-full object-contain"
        />
      </div>
    </motion.div>
  );
};

export default Modal;
