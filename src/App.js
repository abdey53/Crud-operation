import './App.css';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="container">
    <BrowserRouter>
    <Routes>
      <Route index path='/' element={<Home></Home>}></Route>
      <Route path={'/Create'} element={<Add></Add>}></Route>
      <Route path={'/Edit'} element={<Edit></Edit>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
