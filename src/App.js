import {useState} from 'react';
// Import the other components
import './App.css';
import Header from  './components/Header';
import MainMenu from './components/MainMenu';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {

  // Using state to handle display of cards or table
  let [cards, useCards] = useState(true);
  return (
    <div className="App">
      <Header />            
      <div className="mid">
        {/* Call-back function to update display mode from user menu input */}
        <MainMenu uc={useCards}/>
        {/* State of display mode passed to menu component */}
        <MainContent uc={cards}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;

// By Ole Victor