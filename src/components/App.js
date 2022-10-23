import React, { Suspense } from 'react';
import { Routes,Navigate,Route } from 'react-router-dom';
import './App.css';
const Header = React.lazy(() => import('./Header/Header'));
const Cart = React.lazy(() => import('./Cart/Cart'));
const Products = React.lazy(() => import('./Products/Products'));
const Loading = React.lazy(() => import('./common/Loading/Loading'));


const App = () => {
  return (
    <div className="container" >
      <Suspense fallback={<Loading/>}>
        <Header />
        <Routes>
          <Route path='/'  element={<Products/>} />
          <Route path='/cart' element={<Cart />} />
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
