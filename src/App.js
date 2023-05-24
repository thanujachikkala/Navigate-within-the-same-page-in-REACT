import logo from './logo.svg';
import './App.css';
import About from './components/About';
import OurProducts from './components/OurProducts';
import Services from './components/Services';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Link to='#service' smooth>
            services
          </Link>
          <Link to='#about' smooth>
            about
          </Link>
          <Link to='#ourproduct' smooth>
            OurProducts
          </Link>
        </header>
        <About />
        <OurProducts />
        <Services />
      </div>
    </BrowserRouter>
  );
}

export default App;
