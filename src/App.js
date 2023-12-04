
import './App.css';
import Header from './shared/Header';
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
    <Header />
    <Outlet />
    </>
  );
}

export default App;
