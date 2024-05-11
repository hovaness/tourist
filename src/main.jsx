
import ReactDOM from 'react-dom/client'
import 'index.css'
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Welcome from 'pages/Welcome/Welcome';
import Tour from 'pages/Tour/Tour';
import Profile from 'pages/Profile/Profile';
import Subscription from 'pages/Subscription/Subscription';
import Settings from 'pages/Settings/Settings';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Excurtion from 'pages/Excurtion/Excurtion';



const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter basename='/'>
    <Routes>
      <Route path='/' element = {<Welcome/>}></Route>
      <Route path='/tours/:tourId' element = {<Tour/>}></Route>
      <Route path="/tours/:tourId/:excursionId" element={<Excurtion />} />
      <Route path='/profile' element = {<Profile/>}></Route>
      <Route path='/subscription' element = {<Subscription/>}></Route>
      <Route path='/settings' element = {<Settings/>}></Route>
    </Routes>
  </BrowserRouter>
);

