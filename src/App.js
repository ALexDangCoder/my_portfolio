import React, { useEffect } from 'react';
import './App.css';
import Home from "./views/homepage/home.page";

function App() {
  useEffect(() => {
    document.documentElement.classList.add('js');
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
    );

    const targets = document.querySelectorAll('[data-reveal]');
    targets.forEach((el) => io.observe(el));

    // Fallback: reveal all elements after 1.5s so no hidden elements remain on unreached screens
    const timer = setTimeout(() => {
      targets.forEach((el) => el.classList.add('is-in'));
    }, 1500);

    return () => {
      clearTimeout(timer);
      io.disconnect();
    };
  }, []);

  return (
    <div>
      <Home/>
    </div>
  );
}

export default App;
