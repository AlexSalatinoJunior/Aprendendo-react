import { useSearchParams, Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import ListaProdutos from "./ListaProdutos"

const Search = (props) => {
    const [searchParams] = useSearchParams()

    const url = props.url +"?"+ searchParams

  return (
    <div>
        <ListaProdutos url={url} />
    </div>
  )
}

export default Search