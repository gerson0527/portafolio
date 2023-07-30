import "./App.css";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaDownload,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
import { VscArrowSmallDown } from "react-icons/vsc";
import ecommerImage from "./assets/ecommer.jpg";
import Pokemon from "./assets/pokemon.jpg";
import Rick from "./assets/rick.jpg";
import Frases from "./assets/frases.png";
import Clima from "./assets/clima.webp";
import Navbar from "./Components/Navbar/Navbar";
import Card from "./Components/Card/Card";
import Footer from "./Components/Footer/Footer";

function App() {
  const iconosTecnologias = {
    react: <FaReact className="iconstegnologi" />,
    nodejs: <FaNodeJs className="iconstegnologi" />,
    html5: <FaHtml5 className="iconstegnologi" />,
    css3: <FaCss3 className="iconstegnologi" />,
  };
  const tecnologiasCard1 = ["react", "nodejs", "html5", "css3"];
  const tecnologiasCard2 = ["react", "nodejs", "html5"];

  return (
    <div>
      <Navbar />
      <div className="header">
        <div className="texto__header">
          <h1>
            <span className="gerson">gerson ortiz</span>, Full stack developer
          </h1>
        </div>
        <div className="linea__header"></div>
        <div className="parrafo__header">
          <p>cualidades</p>
        </div>
        <div className="icons___header">
          <a
            href="https://www.linkedin.com/in/gerson-ortiz-rivera-desarrollofrontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a href="mailto:gersongio0527@gmail.com">
            <FaEnvelope />
          </a>
        </div>
        <div className="button__header">
          <a href="">proyectos</a> <VscArrowSmallDown className="flecha" />
        </div>
      </div>
      <div className="about">
        <div className="about__title">
          <h2>sobre mi.</h2>
        </div>
        <div className="about__parrafo">
          <p>
            profesional en Ingeniería de sistemas con experiencia en desarrollo
            de aplicaciones web utilizandotecnologías como JavaScript, React,
            Node.js, HTML, CSS, Boostrap, WordPress, PHP y Metodologias Agiles
            (Scrum y Cascada), en industria de tecnología. Me apasiona trabajar
            en proyectos desafiantes y resolver problemas complejos utilizando
            mi habilidad para el análisis y la lógica, tengo experiencia en la
            creación de bases de datos relacionales como MySQL. En mi tiempo
            libre, me gusta colaborar en proyectos de código abierto, también me
            encanta estar aldía con las últimas tendencias en tecnología y
            siempre estoy buscando aprender cosas nuevas.
          </p>
        </div>
        <div className="projects">
          <div className="projects__tile">
            <h2>proyectos.</h2>
            <h3>Estos son mis proyectos concluidos, ¡espero tu feedback!</h3>
          </div>
          <div className="projects__card">
            <Card
              imageUrl={ecommerImage}
              title="SHOPPING CART"
              descripcion="Simulador de carrito de compras, incluye: filtrar por tipo de producto, registro e inicio de sesión y eliminación e inclusión de productos."
              tegnologi={tecnologiasCard1.map(
                (tegnologia) => iconosTecnologias[tegnologia]
              )}
              github="ver codigo"
              vivo="demo"
            />
            <Card
              imageUrl={Pokemon}
              title="POKEMON APP"
              descripcion="La app Pokemon en React es una plataforma interactiva para explorar el mundo de los Pokémon con una interfaz atractiva."
              tegnologi={tecnologiasCard1.map(
                (tegnologia) => iconosTecnologias[tegnologia]
              )}
              github="ver codigo"
              vivo="demo"
            />
            <Card
              imageUrl={Rick}
              title="Rick y morty"
              descripcion="App Rick and Morty en React: Explora personajes y episodios con una interfaz divertida e intuitiva. ¡Diversión garantizada!"
              tegnologi={tecnologiasCard2.map(
                (tegnologia) => iconosTecnologias[tegnologia]
              )}
              github="ver codigo"
              vivo="demo"
            />
            <Card
              imageUrl={Clima}
              title="Clima"
              descripcion="Obtén pronósticos precisos con una interfaz sencilla y amigable. ¡Siempre preparado para el clima!"
              tegnologi={tecnologiasCard1.map(
                (tegnologia) => iconosTecnologias[tegnologia]
              )}
              github="ver codigo"
              vivo="demo"
            />
            <Card
              imageUrl={Frases}
              title="Frases aleatorias"
              descripcion="Descubre inspiradoras y sorprendentes frases cada vez que ingreses a la aplicación. ¡Motivación y sabiduría al alcance de tu mano!"
              tegnologi={tecnologiasCard1.map(
                (tegnologia) => iconosTecnologias[tegnologia]
              )}
              github="ver codigo"
              vivo="demo"
            />
          </div>
          <div className="contactanos">
            <div className="title__contactanos">
              <h2>
                Agradezco tu interés en conocer más sobre mí, por ello, te
                proporciono mi CV para que puedas explorar más acerca de mi
                trayectoria y habilidades..
              </h2>
              <div className="buttom__contactanos">
                <a href="">
                  descargar mi cv <FaDownload />
                </a>
              </div>
            </div>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
