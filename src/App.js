import logo from './logo.svg';
import './App.css';
import AddLibrary from './components/AddLibrary';
import SearchStudent from './components/SearchStudent';
import DeleteBook from './components/DeleteBook';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
<Route path='/' element={<AddLibrary/>}/>
<Route path='/SearchStudent' element={<SearchStudent/>}/>
<Route path='/DeleteBook' element={<DeleteBook/>}/>
<Route path='/ViewAll' element={<ViewAll/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
