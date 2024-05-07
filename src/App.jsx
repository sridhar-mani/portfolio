import "./app.css";
import Navigation from "./Navigation";
import Aboutme from "./Aboutme";
import Projects from "./Projects";
import Contactme from "./Contactme";

export default function App() {
  return (
    <main>
      <Navigation />
      <Aboutme/>
      <Projects/>
      <Contactme/>
    </main>
  );
}
