import React from "react";
import Quiensoy from "./components/Quiensoy";
import Navegacion from "./components/Navegacion";
import Proyectos from "./components/Proyectos";
import Habilidades from "./components/Habilidades";
import Educacion from "./components/Educacion";
import Contacto from "./components/Contacto";



export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navegacion />
      <Quiensoy />
      <Proyectos />
      <Habilidades />
      <Educacion />
      <Contacto />
    </main>
  );
}
