import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Carousel({
  className,
  images,
}: {
  className?: string;
  images: string[];
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextEnabled = currentSlide < images.length - 1;
  const prevEnabled = currentSlide > 0;
  const handleNext = () => {
    if (nextEnabled) {
      setCurrentSlide((old) => {
        return old + 1;
      });
    }
  };
  const handlePrev = () => {
    if (prevEnabled) {
      setCurrentSlide((old) => {
        return old - 1;
      });
    }
  };

  return (
    <>
      <div
        className={`${
          className ? className : ""
        } w-full container relative overflow-hidden h-96`}>
        {images.map((value, index) => (
          <div
            key={index}
            className="w-full container h-96 absolute transition-transform"
            style={{
              transform: `translateX(${(index - currentSlide) * 100}%)`,
            }}>
            <img
              className="object-cover w-full h-full"
              src={value}
              alt="carousel image"
            />
          </div>
        ))}
        <button
          className={`absolute w-8 h-8 top-1/2 left-1 z-50 bg-white rounded-full ${
            prevEnabled
              ? "opacity-70 active:scale-110 hover:opacity-100 "
              : "opacity-20"
          }`}
          onClick={handlePrev}
          disabled={!prevEnabled}>
          <FontAwesomeIcon color="black" icon={faChevronLeft} />
        </button>
        <button
          className={`absolute w-8 h-8 top-1/2 right-1 z-50 bg-white rounded-full ${
            nextEnabled
              ? "opacity-70 active:scale-110 hover:opacity-100 "
              : "opacity-20"
          }`}
          onClick={handleNext}
          disabled={!nextEnabled}>
          <FontAwesomeIcon color="black" icon={faChevronRight} />
        </button>
      </div>
    </>
  );
}
