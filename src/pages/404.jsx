import { useEffect, useRef, useState } from "react";
import Navbar from "../components/UI/Navbar";
import BaseButton from "../components/UI/BaseButton";
import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate()
  const isScrolled = useRef(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const scrolledNow = window.scrollY > 0;
    if (isScrolled.current !== scrolledNow) {
      isScrolled.current = scrolledNow;
      setScrolled(scrolledNow);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full h-full min-w-screen min-h-screen bg-neutral-900 scrollbar-hide scroll-smooth">
      <div 
        className="w-full h-full min-h-screen bg-[url(/images/background.svg)] bg-no-repeat bg-top bg-cover overflow-x-hidden px-4 lg:px-8 xl:px-32">
        <Navbar isScrolled={scrolled}/>
        <main>
          <div className="w-full h-full min-h-screen flex justify-center items-center">
            <div className="w-96 h-full flex flex-col items-center">
              <img src="/images/Film-rolls-rafiki.svg" alt="background" className="w-full h-full max-w-96 object-cover mb-10" />
              <h2 className="text-neutral-50 text-5xl font-semibold mb-4">Lost your way?</h2>
              <p className="text-neutral-300 text-base text-center mb-6">Oops! This is awkward. You are looking for something that doesn&apos;t actually exist.</p>
              <div className="w-[139px]">
                <BaseButton onClick={() => navigate('/')} title='Go Home'/>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}