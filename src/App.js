import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from "./components/Home"

const App = () => {
  return (
    <BrowserRouter> 
      <Header />
      <div>
        <Routes>
          <Route path="/home" element={<Home />}/>
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
