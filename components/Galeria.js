import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useRef } from "react";

export default function Galeria() {
  const carousel = useRef(null);

  const images = [
    "/images/galeria/img1.jpg",
    "/images/galeria/img2.jpg",
    "/images/galeria/img3.jpg",
    "/images/galeria/img4.jpg",
    "/images/galeria/img5.jpg",
    "/images/galeria/img6.jpg",
    "/images/galeria/img7.jpg",
  ];
  const handleRightClick = (e) => {
    carousel.current.scrollLeft += carousel.current.offsetWidth;
    e.preventDefault();
  };
  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  return (
    <section
      id="section-1"
      className="bg-teal-700 flex justify-center items-center w-full h-screen"
    >
      <div className="w-3/4 h-full text-teal-100 flex flex-col">
        <h1 className="font-extrabold text-center text-3xl my-8">Galeria</h1>
        <div className="flex items-center gap-x-4">
          <button
            onClick={handleLeftClick}
            className="hover:bg-black/40 rounded-full p-2 flex items-center justify-center"
          >
            <AiOutlineLeft size={25} />
          </button>
          <div
            ref={carousel}
            id="carousel"
            className="flex gap-x-4 scroll-smooth overflow-x-hidden"
          >
            {images.map((image, index) => (
              <div className="flex-none w-80 h-80 relative" key={index}>
                <div className="w-full object-cover">
                  <Image
                    className="object-cover"
                    src={image}
                    layout="fill"
                    alt="image"
                  />
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handleRightClick}
            className="hover:bg-black/40 rounded-full p-2 flex items-center justify-center"
          >
            <AiOutlineRight size={25} />
          </button>
        </div>
      </div>
    </section>
  );
}
