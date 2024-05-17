import { motion, useInView } from "framer-motion";
import { slideUp } from "../utils/anim";
import { useEffect, useRef } from "react";
import AOS from "aos";
import { Instagram } from "lucide-react";

const MempelaiSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const phrase =
    "Tanpa mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i serta kerabat sekalian untuk menghadiri acara pernikahan kami:";
  const bride = "Nira Kania Putri Ridwan, S.A.P";
  const groom = "Mohammad Anjas Ferdiansyah, S.P.";
  const container = useRef(null);
  const isInView = useInView(container);
  const brideContainer = useRef(null);
  const isInViewBride = useInView(brideContainer, { amount: "200px" });
  const groomContainer = useRef(null);
  const isInViewGroom = useInView(groomContainer, { amount: "200px" });

  return (
    <section id="mempelai" className="bg-gray-900">
      <div className="container mx-auto py-2 px-4 md:px-0 text-white">
        <h1 className="text-4xl text-center my-4">
          بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
        </h1>
        <h1 className="text-3xl font-dancing text-center my-4">
          Assalamualaikum Warahmatullahi Wabarakatuh
        </h1>
        <div className="">
          <p ref={container} className="text-center space-x-2">
            {phrase.split(" ").map((word, index) => (
              <span
                key={index}
                className="inline-flex relative overflow-hidden"
              >
                <motion.span
                  variants={slideUp}
                  initial="initial"
                  animate={isInView ? "open" : "closed"}
                  className="text-lg text-center"
                  custom={index}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </p>
        </div>

        <div className="">
          <div className="md:flex md:justify-between max-w-xl mx-auto py-8">
            <div
              data-aos="fade-up"
              className="mx-auto w-[200px] h-[200px] aspect-square rounded-full overflow-hidden shadow-xl"
            >
              <img
                src="/img/bride.jpg"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="space-y-2 text-center mt-5" ref={brideContainer}>
              <h1 className="font-dancing text-xl font-bold">
                {bride.split(" ").map((char, index) => (
                  <span
                    key={index}
                    className="inline-flex relative overflow-hidden px-1"
                  >
                    <motion.span
                      variants={slideUp}
                      initial="initial"
                      animate={isInViewBride ? "open" : "closed"}
                      className="text-center"
                      custom={index}
                    >
                      {char}
                    </motion.span>
                  </span>
                ))}
              </h1>
              <p>Putri kedua dari</p>
              <p>Bapak Mohamad Ridwan & Ibu Kartika Sari</p>
              <a
                className="flex gap-2 justify-center items-center underline"
                href="https://www.instagram.com/nrkppr"
              >
                <Instagram size={22} />
                nrkppr
              </a>
            </div>
          </div>
          <h1 className="w-full px-20 mx-auto before:content-[''] before:block before:h-[1px] before:bg-white after:content-[''] after:block after:h-[1px] after:bg-white grid grid-cols-[1fr_auto_1fr] gap-2 items-center text-center">
            <span className="">&</span>
          </h1>
          <div className="md:flex md:justify-between max-w-xl mx-auto py-8">
            <div
              data-aos="fade-up"
              className="mx-auto w-[200px] h-[200px] aspect-square rounded-full overflow-hidden shadow-xl"
            >
              <img
                src="/img/groom.jpg"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="space-y-2 text-center mt-5">
              <h1
                className="font-bold font-dancing space-x-1"
                ref={groomContainer}
              >
                {groom.split(" ").map((char, index) => (
                  <span
                    key={index}
                    className="inline-flex relative overflow-hidden w-auto text-xl"
                  >
                    <motion.span
                      variants={slideUp}
                      initial="initial"
                      animate={isInViewGroom ? "open" : "closed"}
                      className="text-center"
                      custom={index}
                    >
                      {char}
                    </motion.span>
                  </span>
                ))}
              </h1>
              <p>Putra pertama dari</p>
              <p>Bapak Dian Nurdiana & Ibu Lilis Martiningsih</p>

              <a
                className="flex gap-2 justify-center items-center underline"
                href="https://www.instagram.com/anjasferdiansyah"
              >
                <Instagram size={22} />
                anjasferdiansyah
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MempelaiSection;
