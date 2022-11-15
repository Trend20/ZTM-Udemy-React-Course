
import { Outlet } from 'react-router-dom';

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

export default Navigation;