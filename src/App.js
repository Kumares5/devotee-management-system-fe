
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/header/Header';
import Dashboard from './pages/dashboard/Dashboard';
import NoMatch from './pages/noMatch/NoMatch';
import PostUser from './pages/devotee/PostUser';
import UpdateUser from './pages/devotee/UpdateUser';

function App() {
  return (
    <>
     <Header />
     <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/devotee' element={<PostUser/>}/>
      <Route path='/devotee/:id' element={<UpdateUser/>}/>
      <Route path='*' element={<NoMatch/>}/>

     </Routes>
    </>
  );
}

export default App;
