import './categories.styles.scss';
import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './routes/home/home'

const Navigation = () =>{
  return(
    <div>
      <div>
        <h1>I am the navigation bar component</h1>
      </div>
      <Outlet />
    </div>
  )
}

const Shop = () =>{
  return(
    <div>
      <div>
        <h1>I am the Shop bar component</h1>
      </div>
    </div>
  )
}


const App = () =>{
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
