import { useSearchParams } from "react-router-dom"
import ListaProdutos from "./ListaProdutos"
import { useContext } from "react"
import {UrlApiContext} from '../context/UrlApiContext'

const Search = () => {
    const {url: urlApi} = useContext(UrlApiContext)
    const [searchParams] = useSearchParams()

    const url = urlApi + "?" + searchParams

  return (
    <div>
        <ListaProdutos url={url} />
    </div>
  )
}

export default Search