import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path={"/"} element={<HomePage />}/>
    <Route path={"*"} element={<ErrorPage />}/>
    <Route path={"/adminPage"} element={<AdminPage />}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
