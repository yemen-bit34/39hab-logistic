import About from "./About";
import Services from "./Services";
import Why from "./Why";
import Contact from "./Contact";
 

 const Main = () => { 
  return (
    <section>

 <section className="main">
   <h1 className="main-h scrolled-bottom">WELCOME TO</h1>
   <h2 className="main-h scrolled-left">7express <code>sdn bhd</code></h2>
  
  {/* <div className="main-p"> <p>  YOUR BEST CHOICE FOR <br/> 
SHIPPING EXPERIENCE IS WITH US <br/>
“FAST , RELIABLE AND SECURE SHIPPING  ANYWHERE , ANYTIME”
</p> 
</div>*/}

 </section>
      <About/>
     <Services/>
     <Why/>
     <Contact/>
     
    </section>
  )
}

export default Main;