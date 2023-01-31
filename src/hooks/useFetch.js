import {useState, useEffect} from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [itemId, setItemId] = useState(null)

    const httpConfig = (data, method) => {
        if(method === "POST"){
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
            setMethod(method)
        }
        if(method === "DELETE"){
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json"
                }
            })
            setMethod(method)
            setItemId(data)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            try {
                const res = await fetch(url)
                if(res.status === 404){
                    throw new Error("404")
                }
                const json = await res.json()
                setData(json)
            } catch (error) {
                setError({
                    code: 404,
                    message: "Houve um erro ao carregar os dados!"
                })
                console.log(error.message)
            }
            setLoading(false)
        }
        fetchData()
    }, [url, callFetch])

    useEffect(() => {
        const httpRequest = async () => {
            if(method === "POST"){
                setLoading(true)
                let fetchOptions = [url, config]

                try {
                    const res = await fetch(...fetchOptions)
                    const json = await res.json()
                    setCallFetch(json)
                } catch (error) {
                    setError({
                        code: 404,
                        message: "Houve um erro ao enviar os dados!"
                    })
                    console.log(error.message)
                }

                setLoading(false)
            }
            if(method === "DELETE"){
                setLoading(true)
                const deleteUrl = url+"/"+itemId
                let fetchOptions = [deleteUrl, config]

                try {
                    const res = await fetch(...fetchOptions)
                    const json = await res.json()
                    setCallFetch(json)
                } catch (error) {
                    setError({
                        code: error.code,
                        message: "Houve um erro ao excluir os dados!"
                    })
                    console.log(error.message)
                }
            }
        }
        httpRequest()
    }, [config, method, url, itemId])

    return {data, httpConfig, loading, error}
}