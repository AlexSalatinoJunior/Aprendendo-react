import './Header.css'

import { NavLink } from 'react-router-dom'
import Buscar from './Buscar';
 import { useTitleColorContext } from '../hooks/useTitleColorContext';

function Header() {
  const {dispatch} = useTitleColorContext()
  const setTitleColor = (color) => {
    dispatch({type: color})
  }
  return (
    <div className="header">
        <div className='cont-1'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/produtos'>Produtos</NavLink>
          <NavLink to='/pedidos'>Meus Pedidos</NavLink>
        </div>
        <Buscar></Buscar>
        <div className='cont-2'>
          <select name='cor-titulos' id="cores" onChange={(e) => setTitleColor(e.target.value)}>
            <option value="BLUE">Azul</option>
            <option value="RED">Vermelho</option>
            <option value="BLACK">Preto</option>
            <option value="GREEN">Verde</option>
            <option value="PURPLE">Roxo</option>
          </select>
          <NavLink to='/login'>Login</NavLink>
          <NavLink to='/cadastro'>Cadastro</NavLink>
        </div>
    </div>
  );
}
export default Header;