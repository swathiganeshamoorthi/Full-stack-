import Counter from "./assets/components/Counter";
import Navbar from "./assets/components/Navbar";
import Parent from "./assets/components/Parent";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Service from "./pages/Service";

const App = ()=>{
  return (
    //Fragment Tag
    <>
    <Navbar/>
    <h1> Hello World!!</h1>
    <h2>Hello World!!</h2>
    <Parent/>
    <About/>
    <Service/>
    <Home/>
    <Contact/>
   <Counter/>

    </>
    

    
  )
}

export default App;