import { useState } from 'react';
import Navbar from './components/Navbar';
import Events from './components/Events';
import './App.css'

function App() {
  const [ searchTerm, setSearchTerm ] = useState('');
  const handleNavbatSearch = (term) => {
    setSearchTerm(term);
  };
console.log(searchTerm, 1000);

  return (
    <>
     <Navbar onSearch={handleNavbatSearch}/>
     <Events searchTerm={searchTerm} />
    </>
  )
}

export default App
