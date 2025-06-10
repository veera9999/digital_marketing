import { useEffect, useState } from "react";
import jumbo1 from "../assets/jumbo-1.jpg";
import jumbo2 from "../assets/jumbo-2.jpg";
import jumbo3 from "../assets/jumbo-3.jpg";

const images = [jumbo1, jumbo2, jumbo3];

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center bg-black text-white mt-16">
      <div className="w-full h-[500px] overflow-hidden relative">
        <img
          src={images[current]}
          alt={`jumbotron-${current}`}
          className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl sm:text-6xl font-bold text-[#FF2800]">
            Welcome to RedChil
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-yellow-500">
            Driving Your Business to Success
          </p>
          <button className="mt-8 px-6 py-3 bg-[#FF2800] text-white rounded-lg hover:bg-yellow-500 hover:text-black transition duration-300 focus:outline-none">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
