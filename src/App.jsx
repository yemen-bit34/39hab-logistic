import './App.css'
import Main1 from './Components/Main1.jsx';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const ScrollToTop = () => {  //any changes in the url it will scroll to the top
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

function App() {
  const { pathname } = useLocation();

  //Observer API for animation
    useEffect(() => {
    let observer = new IntersectionObserver((entries, observer) => {
    entries.filter(entry => entry.isIntersecting).forEach(entry=>{
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
      });
    }, {threshold: 0.6} );

    const elements = document.querySelectorAll('.scrolled-bottom,.scrolled-right,.scrolled-left,.scrolled-top');
    elements.forEach(el => observer.observe(el));
    return () => {elements.forEach(el => observer.unobserve(el))
    };
  }, [pathname]);


  return (
    <>
     <ScrollToTop/>
      <Main1 />
      
    </>
  )
}

export default App;
