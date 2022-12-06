import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='contact' element={<Contact />}></Route>
    </Routes>
  );
}

export default App;
