import './App.scss'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Outlet } from "react-router-dom";
import LayOut from './Components/LayOut/LayOut';
import MainPage from './Components/MainPage/MainPage';
import LoginPage from './Components/LoginPage/LoginPage';
import { useSelector } from 'react-redux';
import { TokenModel } from './Models/auth-models';

function App() {
  const user = useSelector((state: { authToken: TokenModel }) => state.authToken);
  // const user = true

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={user ? <LayOut /> : <LoginPage />}>
        <Route index element={<MainPage />} />
        <Route path="1" element={<div>1</div>} />
        <Route path="2" element={<div>2</div>} />
        <Route path="3" element={<div>3 <Outlet /></div>} />
        <Route path="*" element={<div>ERROR</div>} />
      </Route>
    )
  )

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
