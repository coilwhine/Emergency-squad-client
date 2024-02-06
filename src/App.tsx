import './App.scss'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Outlet } from "react-router-dom";
import LayOut from './Components/LayOut/LayOut';
import MainPage from './Components/MainPage/MainPage';
import LoginPage from './Components/LoginPage/LoginPage';
import { useDispatch, useSelector } from 'react-redux';
import { UserModel } from './Models/auth-models';
import { aouthentication } from './Utils/aouthentication';
import { login, logout } from './App/authTokenSlice';
import { useEffect } from 'react';

function App() {
  const userData = useSelector((state: { authData: UserModel }) => state.authData);
  const dispatch = useDispatch();
  let userDataString = localStorage.getItem("squadUserData");

  useEffect(() => {
    if (userDataString) {
      aouthentication(userDataString).then((res: boolean) => {
        if (res) {
          const userDataParsed = JSON.parse(userDataString);
          dispatch(login(userDataParsed));
        } else {
          dispatch(logout());
        }
      })
    }
  }, [])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={userData ? <LayOut /> : <LoginPage />}>
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
