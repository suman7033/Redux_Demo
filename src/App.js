import { useState } from 'react';
import Auth from './components/Auth';
import Counter from './components/Counter';
import Header from './components/Header';
import { useSelector } from 'react-redux';

function App() {
  const isLogin=useSelector((state)=> state.auth.isAuthenticated);
  return (
    <div>
      {isLogin ? <Header/>: <Auth/>}
    {/* <Auth/> */}
    <Counter />
    </div>
  );
}

export default App;
