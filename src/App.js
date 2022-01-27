import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import { Home, Event, ContactUs, About, NotFound, Service, Location, History } from './component/pages'
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="location" element={<Location />} />
          <Route path="history" element={<History />} />
          <Route path="service" element={<Service />} />
        </Route>
        <Route path="/event" element={<Event />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
