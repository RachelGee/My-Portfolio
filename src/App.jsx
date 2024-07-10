// src/App.jsx
import './App.css';
import NavBar from './Components/Navbar/Navbar';
import Carousel from './Components/Carousel/Carousel';
import Accordion from './Components/Accordion/Accordion';
import Bio from './Components/BioModal/Bio'

const App = () => {

  return (
  <>
    <NavBar />

    <Carousel />

    <Accordion />

  </>  
  );
}

export default App

