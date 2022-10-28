 
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'; 
import {Home, Contact} from "./pages";
import {Header, Footer, Content} from "./components";

function App() {
  return (
   <>
     <BrowserRouter>
       <Header/>
       <Routes>
           <Route path='/' element={<Home/>}/> 
           <Route path='/contact' element={<Contact/>}/> 
       </Routes>
       <Content/>
       <Footer/> 
    </BrowserRouter> 
   </>
      );
}

export default App;
