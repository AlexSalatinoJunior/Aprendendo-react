// import {useState} from 'react'
import { useFetch } from '../hooks/useFetch'
import { Link } from 'react-router-dom'
import './ListaProdutos.css'
import {useTitleColorContext} from "../hooks/useTitleColorContext"

const ListaProdutos = (props) => {

    const {color} = useTitleColorContext()

    const {data: items, loading, error} = useFetch(props.url)

    // eslint-disable-next-line no-lone-blocks
    {/*
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
    */}

    return (
        <div className='ListaProdutos'>
            <h2>Lista de Produtos</h2>
            {error && <p>{error.message}</p>}
            {loading && <p>Carregando...</p>}
            <ul className='products'>
                {!error && !loading && items && items.map((product) => (
                    <li key={product.id}>
                        <h2 style={{color: color}}>{product.name}</h2>
                        <p>R$: {product.price}</p>
                        <Link to={`/produtos/${product.id}`}>Detalhes</Link>
                    </li>
                ))}
            </ul>
            {/*
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" value={name} name="name" required onChange={
                        (e) => setName(e.target.value)}></input>
                </label>
                <label>
                    Preço:
                    <input type="text" value={price} name="price" required onChange={
                        (e) => setPrice(e.target.value)}></input>
                </label>
                {!loading && <input type="submit" value="Criar"></input>}
            </form>
            */}
        </div>
)}

export default ListaProdutos