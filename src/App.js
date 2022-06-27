import logo from './logo.svg';
import './App.css';
import MainPage from './pages/mainPage';

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <MainPage/>
    </BrowserRouter>
  );
}

export default App;
