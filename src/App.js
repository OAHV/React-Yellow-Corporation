// Import the other components
import './App.css';
import './flexbox.css';
import Header from  './components/Header';
import MainMenu from './components/MainMenu';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />            
      <div className="mid">
        <MainMenu />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;

// By Ole Victor