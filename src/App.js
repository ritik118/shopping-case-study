import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className='contain'>
    <Routes>
      <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
