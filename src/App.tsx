import './App.scss'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Outlet } from "react-router-dom";
import LayOut from './Components/LayOut/LayOut';
import MainPage from './Components/MainPage/MainPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<LayOut />}>
      <Route index element={<MainPage />} />
      <Route path="1" element={<div>1</div>} />
      <Route path="2" element={<div>2</div>} />
      <Route path="3" element={<div>3 <Outlet /></div>}>
        <Route path="1" element={<div>3.1</div>} />
        <Route path="2" element={<div>3.2</div>} />
        <Route path="*" />
      </Route>
      <Route path="*" element={<div>ERROR</div>} />
    </Route>
  )
)

function App() {

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
