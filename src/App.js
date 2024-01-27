import MvApp from './components/homepage/Movies-App';
import Shows from './components/homepage/shows';
import Navbar from './navbar';
import {
  Routes,
  Route
} from 'react-router-dom';

export default function App(){
  return(
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<MvApp/>}></Route>
        <Route path="/shows/:show" element={<Shows/>}></Route>
      </Routes>
    </>
  );
}