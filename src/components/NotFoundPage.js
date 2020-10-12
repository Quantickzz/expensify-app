import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  //Link é melhor do que href pois utiliza client-side
  //routing, assim nao da refresh na pagina toda
  //so funciona para apps nossas nao externas obv
  <div>
    404 - <Link to="/">Go home</Link>
  </div>
);

export default NotFoundPage;
