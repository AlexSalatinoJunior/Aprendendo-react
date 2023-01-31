import { useParams, useNavigate } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Produto = (props) => {
  const {id} = useParams()
  const urlId = props.url +"/"+ id

  const {data: item, error} = useFetch(urlId)
  const navigate = useNavigate()

  return (
    <div>
      {error && error.code === 404 && navigate("pagina-nao-encontrada")}
      <p>Id do produto: {id}</p>
      {!error && item &&
      <div>
        <h2>{item.name}</h2>
        <p>R$: {item.price}</p>
      </div>
      }
    </div>
  )
}

export default Produto