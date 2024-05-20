import { Route, Routes } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import BasicLayout from './layouts/BasicLayout';
import Home from './pages/Home';
import NoPage from './pages/NoPage';

function App() {
  return (
    
    <Routes>
    <Route path="/" element={<BasicLayout />}>
      <Route index path="/Home" element={<Home />} />
      <Route path="*" element={<NoPage />} />
    </Route>
  </Routes>
  );
}

export default App;
