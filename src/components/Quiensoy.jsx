import React from "react";
import Logo from "../assets/Images/Mafelogo.png"

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue">
          Hola, soy Maria Fernanda Pantoja Cruz
            <br className="hidden lg:inline-block" />
          </h1>
          <h2> Me encanta construir aplicaciones web.</h2>
          <p className="mb-8 leading-relaxed">
          Me presento soy una mujer ambientalista, creativa, con comunicación asertiva.
          </p>
          <div className="flex justify-center">
            
            
            <a
            href="#works"
            className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md "
            >
              Proyectos
              </a>
          </div>

          
          
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={Logo}
          />
        </div>
      </div>
    </section>
    
  );
}
