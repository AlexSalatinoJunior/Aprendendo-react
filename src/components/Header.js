import './Header.css'

import { NavLink } from 'react-router-dom'
import Buscar from './Buscar';

function Header() {
  return (
    <div className="header">
        <div className='cont-1'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/produtos'>Produtos</NavLink>
          <NavLink to='/pedidos'>Meus Pedidos</NavLink>
        </div>
        <Buscar></Buscar>
        <div className='cont-2'>
          <NavLink to='/login'>Login</NavLink>
          <NavLink to='/cadastro'>Cadastro</NavLink>
        </div>
    </div>
  );
}

export default Header;
