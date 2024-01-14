import { useState,useEffect } from "react"
import {FetchMovieData} from '../utils/api'
import {useSelector} from 'react-redux'

const baseUrl = 'http://127.0.0.1:8000/api'


const useFetch  = (url) => {
  const [data,setData] = useState(null)
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(null)
  const {type} = useSelector((state)=>(state.home))
  
  useEffect(()=>{
    setLoading(true)
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () =>{
            
          
            const data = await FetchMovieData(signal,`${baseUrl+url+type}`).then((res)=>{
                setData(res)
                setLoading(false)
            })
            if(data?.error){
                  setError(data.error)
                  setLoading(false)
            }
            
            
          }
          fetchData()
          return()=>{
            abortController.abort();
          }
  },[url])
  return {data , loading , error}
}

export default useFetch;