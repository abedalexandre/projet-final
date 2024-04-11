import Header from "./component/commun/Header"
import { Routes, Route } from "react-router-dom"
import AssistMo from "./component/pages/AssistMo";
import EtudePrix from"./component/pages/EtudePrix";
import Index from "./component/pages/Index";
import Metre from "./component/pages/Plan";
import Relever from "./component/pages/Relever";
import Home from "./component/pages/Home";
import Plan from "./component/pages/Plan";
import Prescriptions from "./component/pages/Presciptions";




function App(){
   return(
    <div>
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/etude-prix" element={<EtudePrix/>}/>
        <Route path="/assist-mo" element={<AssistMo/>}/>
        <Route path="/index" element={<Index/>}/>
        <Route path="/metre" element={<Metre/>}/>
        <Route path="/plan" element={<Plan/>}/>
        <Route path="/relever" element={<Relever/>}/>
        <Route path="/prescriptions"element={<Prescriptions/>}/>
        <Route path="/etudeprix"element={<EtudePrix/>}/>
        

        </Routes>

    </div>
)}
export default App;



