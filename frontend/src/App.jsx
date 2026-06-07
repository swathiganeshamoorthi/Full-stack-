import Counter from "./assets/components/Counter";
import Effect from "./assets/components/Effect";
import Navbar from "./assets/components/Navbar";
import Parent from "./assets/components/Parent";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Service from "./pages/Service";
import{ Routes,Route} from 'react-router-dom'
const App = ()=>{
  return (
    //Fragment Tag
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/service' element={<Service/>}></Route>
      <Route path='/parent' element={<Parent/>}/>
      <Route path='/useState' element={<Counter/>}/>
      <Route path='/useEffect' element={<Effect/>}/>
    </Routes>

    </>
    

    
  )
}

export default App;