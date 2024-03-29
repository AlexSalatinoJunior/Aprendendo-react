import { useParams, useNavigate } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { useContext } from "react"
import { UrlApiContext } from "../context/UrlApiContext"
import { useTitleColorContext } from "../hooks/useTitleColorContext"

const Produto = () => {
  const {color} = useTitleColorContext()
  const {url} = useContext(UrlApiContext)
  const {id} = useParams()
  const urlId = url +"/"+ id

  const {data: item, error} = useFetch(urlId)
  const navigate = useNavigate()

  return (
    <div>
      {error && error.code === 404 && navigate("pagina-nao-encontrada")}
      <p>Id do produto: {id}</p>
      {!error && item &&
      <div>
        <h2 style={{color: color}}>{item.name}</h2>
        <p>R$: {item.price}</p>
      </div>
      }
    </div>
  )
}

export default Produto