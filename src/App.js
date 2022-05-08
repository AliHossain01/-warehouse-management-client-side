import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import BookDetail from './Pages/BookDetail/BookDetail';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';

import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import AddBook from './Pages/AddBook/AddBook';
import ManageBook from './Pages/ManageBook/ManageBook';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path='/inventory/:inventoryId' element={<RequireAuth><BookDetail></BookDetail></RequireAuth>}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* <Route path="/checkout" element={<RequireAuth><CheckOut /></RequireAuth>} /> */}
        <Route path="/addbook" element={<RequireAuth><AddBook /></RequireAuth>} />
        <Route path="/manage" element={<RequireAuth><ManageBook /></RequireAuth>} />


        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
