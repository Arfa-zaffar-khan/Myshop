import { useState, useEffect } from "react"


export const useApi = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error,seteError]=useState(null);
    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await fetch(url, { signal: controller.signal })
                if(!res.ok){
                    throw new Error("Could not get data")
                }
                const json = await res.json()
                setLoading(false)
                setData(json)
                seteError(null)
            }catch(err){
                setLoading(true)
                seteError(err.message || 'An error occurred')
                console.log(err)
            }
        }
        fetchData();

        return () => {
            controller.abort()
        }
    }, [url])
    return { data, loading ,error};
}