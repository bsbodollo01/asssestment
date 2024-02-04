// components/Slideshow.js
import { useState, useEffect } from 'react';

const Slideshow = ({homepageData}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % homepageData.slideshow?.img?.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
        {homepageData.slideshow?.map((imageUrl, idx) => (
                <img
                key={idx}
                src={imageUrl.img}
                alt={`Slide ${idx + 1}`}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                    index === idx ? 'opacity-100' : 'opacity-0'
                }`}
                />
            ))}
    </div>
  );
};

export default Slideshow;
