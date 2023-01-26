import './Header.css'

function Header() {
  return (
    <div className="header">
        <a>Home</a>
        <a>Produtos</a>
        <a>Meus Pedidos</a>
        <div className="espacador"></div>
        <a>Login</a>
        <a>Cadastro</a>
    </div>
  );
}

export default Header;
