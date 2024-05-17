import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-40%", "40%"]);

  return (
    <section
      ref={sectionRef}
      className="mt-10 h-[60vh] text-white flex justify-center items-center overflow-hidden"
    >
      <div className="space-y-4 relative flex justify-center items-center flex-col h-full">
        <motion.div
          style={{ y }}
          className="absolute top-0 left-0 w-full overflow-hidden h-[120%] flex items-center justify-center -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <img src="/img/preWedding.jpg" alt="logo" />
        </motion.div>
        <h1 className="text-2xl text-center">Terima Kasih</h1>
        <p className="text-md text-center">
          Merupakan sebuah kehormatan dan kebahagiaan bagi Kami jika
          Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu bagi Kami
        </p>

        <div>
          <p className="text-md text-center">Made with ❤️ by Anjas</p>
          <div className="flex gap-2 justify-center">
            <a href="https://wa.me/6281328528954">Whatsapp</a>
            <a href="https://www.instagram.com/anjasferdiansyah">Instagram</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
