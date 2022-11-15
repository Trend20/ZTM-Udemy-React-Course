import './categories.styles.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home'
const App = () =>{
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
