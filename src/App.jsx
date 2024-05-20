import "./app.css";
import Navigation from "./Navigation";
import Aboutme from "./Aboutme";
import Projects from "./Projects";
import Contactme from "./Contactme";
import Rights from "./Rights";
import {BrowserRouter,Routes,Route} from 'react-router-dom';

export default function App() {
  return (
    <main>
      <Navigation />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Aboutme/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/aboutme" element={<><Aboutme/><Aboutme/><Aboutme/><Contactme/></>}></Route>
      </Routes>
      </BrowserRouter>
      <Rights></Rights>
    </main>
  );
}
