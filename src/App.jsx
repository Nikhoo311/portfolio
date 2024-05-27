import './app.scss';
import Navbar from './components/navbar/Navbar';
const App = () => {
  return <div>
    <section id="acceuil">
      <Navbar/>  
    </section>
    <section id="competences">Parallax</section>
    <section>Compétences + CV</section>
    <section id="projets">Parallax</section>
    <section>Projects</section>
    <section id="contact">Contact</section>
  </div>;
};

export default App;
