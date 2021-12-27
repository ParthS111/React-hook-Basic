import './App.css';
import UseContext from './Hooks/useContext';
import UseEffect from './Hooks/useEffect';
import UseState from './Hooks/useState';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
function App() {
  return (
   <Router>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contact/' element={<Contact/>}/>
       <Route path='/contact/:userName' element={<Contact/>}/>
       <Route path='*' element={<Error/>}/>
     </Routes>
   </Router>
  );
}

export default App;
 // <div className="App">
    //    {/* <UseState /> */}
    //    {/* <UseEffect /> */}
    //    <UseContext />
    // </div>