import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Purchase from './Pages/Purchase/Purchase';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Login/Register';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import ManageOrders from './Pages/Dashboard/ManageOrders/ManageOrders';
import ManageUsers from './Pages/Dashboard/ManageUsers/ManageUsers';
import ManageProducts from './Pages/Dashboard/ManageProducts/ManageProducts';
import Payment from './Pages/Dashboard/Payment';
import RequireAdmin from './Pages/Login/RequireAdmin';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/purchase/:partId' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='review' element={<AddReview></AddReview>}></Route>
          <Route path='profile' element={<MyProfile></MyProfile>}></Route>
          <Route path='add' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path='orders' element={<RequireAdmin><ManageOrders></ManageOrders></RequireAdmin>}></Route>
          <Route path='users' element={<RequireAdmin><ManageUsers></ManageUsers></RequireAdmin>}></Route>
          <Route path='products' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
        </Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
