import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => {
  return <nav>
    <ul>
      <li className="link"><Link to="/">Home</Link></li>
      <li className="link"><Link to="/new">Añade un pokemon personalizado</Link></li>
      <li className="link"><Link to="/search">Busca tu pokemon favorito</Link></li>
    </ul>
  </nav>;
};

export default Nav;
