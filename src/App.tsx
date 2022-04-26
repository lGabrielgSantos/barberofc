import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { HeaderR } from './components/HeaderR'
import { NewSchedulingModal } from './components/NewSchedulingModal';
import { LoginPage } from './routes/LoginPage';
import { MainPage } from './routes/MainPage';
import { ContentR, GlobalStyles } from './styles/global';

function App() {
  const [menuStatus, setMenuStatus] = useState(false)
const [isModalOpen, setIsModalOpen] = useState(false);
  function handleOpenModal() {
    setIsModalOpen(true);
   
  }
  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function handleOpenMenu() {
    setMenuStatus(true)
  }
  function handleCloseMenu() {
    setMenuStatus(false)
  }


  return (
    <BrowserRouter>
    <Routes>
    <Route  path="/" element={<MainPage />}/>
    <Route path="/login" element={<LoginPage />}>
    </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
