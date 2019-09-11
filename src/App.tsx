import React from 'react';
import './App.css';
import DogDetails from './components/DogDetails';

const App: React.FC = () => {
  function onBark(){
    alert("Bark")
  }
  
  return (
    <div className="App">
      
      <header className="App-header">
      <DogDetails imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIEnlHcilz1ZnwnakpvN54b_ajA1fnHw5Sdp3JUg7hDXYj-5BM" name="Bark!!!" onBark={onBark}></DogDetails>

      </header>
    </div>
  );
}

export default App;
