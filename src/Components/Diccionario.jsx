import React, { useEffect, useState } from "react";
import axios from "axios";
import Styles from "./Styles.css";
import Definiciones from "./Definiciones.jsx";
import Sinonimos from "./Sinonimos.jsx";
import Antonimos from "./Antonimos.jsx";
//Este diccionario tendrá 1 recuadro donde se introducirá la palabra a buscar, un "label" donde se mostrará la palabra que se está buscando, y a la derecha un recuadro donde se
//muestren la definición, sinónimos y antónimos
const Diccionario = (props) => {
  const [palabraBuscada, setPalabraBuscada] = useState(null); //va a ser la palabra que se busca

  const buscarPalabra = (props) => {
    setPalabraBuscada(props);
  };
  //Cuando se realice la búsqueda, primero url va a tener que ser definiciones, después va a tener que ser sinónimos y después va a tener que ser antonimos
  //No mostrar nada hasta que los antónimos sean != null de manera que no vaya apareciendo poco a poco y aparezcan todos los datos relativos a la palabra juntos
  return (
    <div className="diccionario">
      <div className="busqueda">
        <input
          type="text"
          name="palabraBuscar"
          id="palabraBuscar"
          placeholder="Ej: tirachinas"
        />
        <button
          className="boton"
          onClick={() =>
            buscarPalabra(document.getElementById("palabraBuscar").value)
          }
        >
          GO
        </button>
      </div>
      <div className="resultados">
        {palabraBuscada ? (
          <div className="contenido">
            {
              <div>
                <Definiciones palabraBuscada={palabraBuscada}/>
                <Sinonimos palabraBuscada={palabraBuscada}/>
                <Antonimos palabraBuscada={palabraBuscada}/>
              </div>
            }
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default Diccionario;
