import './App.css';
import { Route, Routes } from 'react-router-dom';
import Menu from './pages/Menu/menu.page';
import Order from './pages/Order/order.page';
import Admin from './pages/Admin/admin.page';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
