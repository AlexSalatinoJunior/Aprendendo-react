import {useState} from 'react'
import { useFetch } from '../hooks/useFetch'

function ListaProdutos(){

    const url = "http://localhost:3000/products"

    const {data: items, httpConfig, loading, error} = useFetch(url)
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")

    const handleSubmit = async (e) =>{
         e.preventDefault()
         const product = {
            name,
            price
         }
         setName("")
         setPrice("")
         httpConfig(product, "POST")
    }

    return (
        <div className='ListaProdutos'>
            <h2>Lista de Produtos</h2>
            {error && <p>{error}</p>}
            {loading && <p>Carregando...</p>}
            <ul>
                {!error && !loading && items && items.map((product) => (
                    <li key={product.id}>{product.name} - R$: {product.price} <button onClick={() => httpConfig(product.id, "DELETE")}>Excluir</button></li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" value={name} name="name" required onChange={(e) => setName(e.target.value)}></input>
                </label>
                <label>
                    Preço:
                    <input type="text" value={price} name="price" required onChange={(e) => setPrice(e.target.value)}></input>
                </label>
                {!loading && <input type="submit" value="Criar"></input>}
            </form>
        </div>
)}

export default ListaProdutos