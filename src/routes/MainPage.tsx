import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dashboard } from "../components/Dashboard";
import { Header } from "../components/Header";
import { HeaderR } from "../components/HeaderR";
import { NewSchedulingModal } from "../components/NewSchedulingModal";
import { SchedulingProvider } from "../components/SchedulingContext";


import { ContentR, GlobalStyles } from "../styles/global";


export function MainPage() {
  const navigate = useNavigate()
  useEffect(() =>  {
    const usuario = localStorage.getItem("user");
    if(usuario) {

    }else{
     navigate("login")
    }
  },[])


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


    return(
        <>
        <GlobalStyles />
        <SchedulingProvider>
        <Header handleCloseMenu={handleCloseMenu} menuStatus={menuStatus}/>
        <ContentR>
        <HeaderR handleOpenModal={handleOpenModal} handleOpenMenu={handleOpenMenu}/>
        <Dashboard />
        <NewSchedulingModal 
        isOpen={isModalOpen} 
        onRequestClose={handleCloseModal} />
        </ContentR>
        </SchedulingProvider>
      </>
    )
}