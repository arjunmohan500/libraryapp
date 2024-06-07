import logo from './logo.svg';
import './App.css';
import AddLibrary from './components/AddLibrary';
import SearchStudent from './components/SearchStudent';
import DeleteBook from './components/DeleteBook';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div>
      <AddLibrary/>
      <SearchStudent/>
      <DeleteBook/>
      <ViewAll/>
    </div>
  );
}

export default App;
