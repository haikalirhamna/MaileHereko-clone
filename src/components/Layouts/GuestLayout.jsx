import { Outlet } from "react-router-dom"
import Navbar from "../UI/Navbar"
import { useEffect, useRef, useState } from "react";

export default function GuestLayout() {
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
          <Outlet/>
        </main>
      </div>
    </div>
  )
}