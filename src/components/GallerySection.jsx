import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";
import Modal from "./Modal";
import { AnimatePresence } from "framer-motion";

const GallerySection = () => {
  const [parallaxSwiper, setParallaxSwiper] = useState("");
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.8 : 0;

  const listImage = [
    "/img/nikah.jpg",
    "/img/bride.jpg",
    "/img/groom.jpg",
    "/img/wedding.jpg",
  ];

  const [clickedImage, setClickedImage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImage(item);
  };

  const handleRightClick = () => {
    if (currentIndex + 1 < listImage.length) {
      setCurrentIndex(currentIndex + 1);
      setClickedImage(listImage[currentIndex + 1]);
    } else {
      setCurrentIndex(0);
      setClickedImage(listImage[0]);
    }
  };

  const handleLeftClick = () => {
    if (currentIndex - 1 >= 0) {
      setCurrentIndex(currentIndex - 1);
      setClickedImage(listImage[currentIndex - 1]);
    } else {
      setCurrentIndex(listImage.length - 1);
      setClickedImage(listImage[listImage.length - 1]);
    }
  };

  return (
    <section id="gallery" className="my-12">
      <Swiper
        cssMode
        parallax={true}
        onSwiper={setParallaxSwiper}
        loop={true}
        speed={600}
        modules={[Parallax, Pagination, Navigation, Autoplay]}
        pagination={{ clickable: true }}
        navigation={true}
        className="block z-0 max-w-xl w-[90%] mx-auto h-[300px] aspect-square"
      >
        <SwiperSlide className="overflow-hidden">
          <div
            data-swiper-parallax={parallaxAmount}
            className="w-full bg-slate-100 top-0 left-0 h-full z-10 object-cover"
          >
            <img
              src="/img/nikah.jpg"
              className="object-cover w-full h-full"
              alt="nikah"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="overflow-hidden">
          <div
            data-swiper-parallax={parallaxAmount}
            className="w-full bg-slate-100 top-0 left-0 h-full z-10"
          >
            <img
              src="/img/bride.jpg"
              className="w-full aspect-square object-cover"
              alt="nikah"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="overflow-hidden">
          <div
            data-swiper-parallax={parallaxAmount}
            className="w-full absolute bg-slate-100 top-0 left-0 h-full z-10"
          >
            <img
              src="/img/groom.jpg"
              className="w-full h-full aspect-square object-cover"
              alt="nikah"
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="grid grid-cols-2 gap-2 my-8 px-4">
        {listImage.map((image, i) => {
          return (
            <div
              key={i}
              className="w-full h-[200px] group relative group overflow-hidden"
            >
              <img
                src={image}
                alt="image"
                className="w-full h-full object-center absolute object-cover group-hover:scale-110 transition-transform duration-300"
                onClick={() => handleClick(image, i)}
              />
            </div>
          );
        })}
      </div>
      <AnimatePresence mode="wait" initial={false}>
        {clickedImage && (
          <Modal
            clickedImage={clickedImage}
            currentIndex={currentIndex}
            setClickedImage={setClickedImage}
            handleRight={handleRightClick}
            handleLeft={handleLeftClick}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
export default GallerySection;
