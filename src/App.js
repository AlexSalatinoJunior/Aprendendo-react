import './App.css'
import ListaProdutos from './pages/ListaProdutos'
import Home from './pages/Home'
import Pedidos from './pages/Pedidos'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Header from './components/Header'
import Produto from './pages/Produto'
import NotFound from './pages/NotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Search from './pages/Search'

function App() {

  const url = "http://localhost:3000/products"

  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<ListaProdutos url={url} />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/produtos/:id" element={<Produto url={url} />}></Route>
          <Route path="/search" element={<Search url={url} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
