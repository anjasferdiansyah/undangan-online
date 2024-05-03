import confetti from "canvas-confetti";
import { useEffect, useRef, useState } from "react";
import WelcomePage from "./components/WelcomePage";
import { AnimatePresence, motion } from "framer-motion";
import HomeSection from "./components/HomeSection";
import MempelaiSection from "./components/MempelaiSection";
import Lenis from "lenis";
import DetailEvent from "./components/DetailEvent";
import GallerySection from "./components/GallerySection";
import RSVPSection from "./components/RSVPSection";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

const App = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const buttonRef = useRef(null);
  const animation = () => {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const colors = ["#AEE6F2", "#71C6D9", "#3B9ABF"];

    const randomInRange = (min, max) => {
      return Math.random() * (max - min) + min;
    };

    const heart = confetti.shapeFromPath({
      path: "M167 72c19,-38 37,-56 75,-56 42,0 76,33 76,75 0,76 -76,151 -151,227 -76,-76 -151,-151 -151,-227 0,-42 33,-75 75,-75 38,0 57,18 76,56z",
      matrix: [
        0.03333333333333333, 0, 0, 0.03333333333333333, -5.566666666666666,
        -5.533333333333333,
      ],
    });

    function frame() {
      const timeLeft = animationEnd - Date.now();

      colors.forEach((color) => {
        confetti({
          particleCount: 1,
          startVelocity: 0,
          ticks: Math.max(50, 75 * (timeLeft / duration)),
          origin: {
            x: Math.random(),
            y: Math.abs(Math.random() - timeLeft / duration),
          },
          zIndex: 1057,
          colors: [color],
          shapes: [heart],
          drift: randomInRange(-0.5, 0.5),
          gravity: randomInRange(0.5, 1),
          scalar: randomInRange(0.5, 1),
        });
      });

      if (timeLeft > 0) {
        requestAnimationFrame(frame);
      }
    }

    frame();
  };

  const handleOpen = async () => {
    setOpen(true);
    buttonRef.current.disabled = true;
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    animation();
  };

  return (
    <>
      <AnimatePresence>
        {!open && <WelcomePage handleOpen={handleOpen} buttonRef={buttonRef} />}
      </AnimatePresence>

      {open && (
        <motion.div
          initial={{ opacity: 0, transition: { duration: 2 } }}
          animate={{ opacity: 1, transition: { duration: 2 } }}
        >
          <Navigation />
          <HomeSection />
          <MempelaiSection />
          <DetailEvent />
          <GallerySection />
          <RSVPSection />
          <Footer />
        </motion.div>
      )}
    </>
  );
};

export default App;
