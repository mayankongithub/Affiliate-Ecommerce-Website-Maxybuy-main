import './App.css'
import Footer from './Components/Footer/footer'
import Header from './Components/Header/header'
import { Outlet } from 'react-router-dom'
import MainContainer from './Components/mainContainer'
import StoreContextProvider from './Components/Store/storeContext'

function App() {
   let a='baby';
   return (<>
      <StoreContextProvider>
         <Header></Header>
         <MainContainer>
            <Outlet />
         </MainContainer>
         <Footer></Footer>
      </StoreContextProvider>

   </>)

}


export default App
