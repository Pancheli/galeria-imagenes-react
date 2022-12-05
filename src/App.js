import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  const Heroes = [
    {
      name: "Iron Man",
      image: "/img/ironman.jpg",
      description:
        "Anthony Edward 'Tony' Stark fue un multimillonario industrial, anterior Director General de Industrias Stark y miembro fundador de los Vengadores.",
    },
    {
      name: "Thor Odinson",
      image: "/img/Thor.jpg",
      description:
        "Thor Odinson es el Dios del Trueno, anterior Rey de Nuevo Asgard y miembro fundador de los Vengadores.",
    },
    {
      name: "Capitan America",
      image: "/img/Captain-america.jpg",
      description:
        "El Capitan Steven Rogers es un veterano de la Segunda Guerra Mundial, miembro fundador de los Vengadores y el primer superheroe del mundo.",
    },
    {
      name: "Hulk",
      image: "/img/Hulk.jpg",
      description:
        "El Dr. Bruce Banner, alias 'Hulk' es un fisico teorico estadounidense, famoso por su trabajo en los estudios de fisica nuclear y radiacion gamma.",
    },
    {
      name: "Black Widow",
      image: "/img/Black-widow.jpg",
      description:
        "Natalia Alianovna 'Natasha' Romanoff, mejor conocida como Black Widow, fue una agente especial de S.H.I.E.L.D. y miembro fundadora de los Vengadores.",
    },
    {
      name: "Hawkeye",
      image: "/img/Hawkeye.jpg",
      description:
        "Clinton Francis 'Clint' Barton, mejor conocido como Hawkeye, es un antiguo agente especial de S.H.I.E.L.D. y miembro fundador de los Vengadores.",
    },
    {
      name: "Spider-Man",
      image: "/img/spiderman.jpg",
      description:
        "Peter Parker, es un antiguo estudiante de la Escuela de Ciencia y Tecnologia de Midtown que, despues de adquirir sus habilidades a causa de la mordida de una arana radiactiva, eligio combatir el crimen como Spider Man",
    },
    {
      name: "Capitana Marvel",
      image: "/img/captain-marvel.jpg",
      description:
        "La Capitana Carol Danvers es una ex piloto de la Fuerza Aerea de los Estados Unidos que, al destruir el motor de velocidad de la luz fabricado por su mentora Mar-Vell, fue expuesta a la energia del Teseracto, obteniendo poderes cosmicos y fue raptada para servir al Imperio Kree.",
    },
    {
      name: "Thanos",
      image: "/img/Thanos.jpg",
      description:
        "Thanos fue un senor de la guerra y genocida de Titan, cuyo objetivo principal era traer estabilidad al universo, ya que creia que su enorme poblacion agotaria todo el suministro de recursos disponibles y eso condenaria a las especies a morir.",
    },
  ];

  return (
    <div className="App text-center">
      <Header title="Galeria de imagenes con React" />
      <div className="App-Gallery container text-center">
        <h2 className="my-3 text-white"> Personajes de Avenger's End Game</h2>
        <div className="Gallery row justify-content-between">
          {Heroes.map((hero) => (
            <div className="col-12 col-sm-4">
              <Card
                title={hero.name}
                src={process.env.PUBLIC_URL + hero.image}
                description={hero.description}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer footer="Despues de los eventos devastadores de 'Avengers: Infinity War', el universo esta en ruinas debido a las acciones de Thanos, el Titan Loco. Con la ayuda de los aliados que quedaron, los Vengadores deben reunirse una vez mas para deshacer sus acciones y restaurar el orden en el universo de una vez por todas, sin importar cuales son las consecuencias que pueda tener." />
    </div>
  );
}

export default App;
