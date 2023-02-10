import Buscador from "./components/Buscador";
import Listado from "./components/Listado";
import Crear from "./components/Crear";
import { useState } from "react";

function App() {
  const [listState, setListState] = useState([]);
  return (
    <div className="layout">
    {/*Cabecera*/}
    <header className="header">
      <div className="logo">
        <div className="play">
          
        </div>
      </div>
      <h1>Mis Películas</h1>
    </header>
    {/*Barra de Navegación*/}
    <nav className="nav">
      <ul>
        <li><a href="/#">Inicio</a></li>
        <li><a href="/#">Películas</a></li>
        <li><a href="/#">Blog</a></li>
        <li><a href="/#">Contacto</a></li>
      </ul>
    </nav>
    {/*Contenido Principal*/}
    <section className="content">

      {/*Aqui va el listado de peliculas */}
      <Listado listState={listState} setListState={setListState}></Listado>

    </section>

    {/*Barra Lateral*/}
    <aside className="lateral">
      <Buscador listState={listState} setListState={setListState}></Buscador>
      <Crear setListState={setListState}></Crear>
    </aside>

    {/*Pie de página*/}
    <footer className="footer">
      &copy; React js
      </footer>
  </div>    
  );
}

export default App;
