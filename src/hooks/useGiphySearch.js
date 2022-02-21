import { useEffect, useState } from 'react'
import axios from 'axios'
const baseURL = 'https://api.giphy.com/v1/gifs';
const apiKey = 'z3TCxWMXI3poet0DNQBeC8RfYrprX7U1';
export default function useGiphySearch(searchQuery, offset) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [giphyData, setGiphyData] = useState([])
    const [hasMore, setHasMore] = useState(false)

    useEffect(() => {
        setGiphyData([])
    }, [searchQuery])

    useEffect(() => {
        setLoading(true)
        setError(false)
        let url;
        if(searchQuery?.length){

            url = `${baseURL}/search?api_key=${apiKey}`
        }else{
            url= `${baseURL}/trending?api_key=${apiKey}`;
        }
        let cancel
        axios({
            method: 'GET',
            url,
            params: { q: searchQuery, offset: offset, limit: 5 },
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setGiphyData(prevGiphy => {
                return [...new Set([...prevGiphy, ...res.data.data])]
            })
            setHasMore(res.data.data.length)
            setLoading(false)
        }).catch(e => {
            if (axios.isCancel(e)) return
            setError(true)
        })
        return () => cancel()
    }, [searchQuery, offset])

    return { loading, error, giphyData, hasMore }
}