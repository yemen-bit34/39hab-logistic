import About from "./About";
import Header from "./Header";
import Main2 from "./Main2";
import Services from "./Services";
import Why from "./Why";
import Contact from "./Contact";
import Footer from "./Footer";
import { Route,Routes } from "react-router-dom";


const Main1  = () => {
  return (
    <section >
      
        <Header/>
<Routes>
    <Route path="/" element={<Main2 />}/>
        <Route path="/about" element={<About/>}/>
       <Route path="/services" element={<Services/>}/>
       <Route path="/why" element={<Why/>}/>
       <Route path="/contact" element={<Contact/>}/>
         
</Routes>
       <Footer/>
    </section>
  )
}
export default Main1;