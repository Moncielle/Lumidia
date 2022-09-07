import axios from 'axios'
import { useState, useEffect } from 'react'

const useGetData = (url) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const asyncData = async () => {
      const { data } = await axios.get(url)
      setData(data.results)
    }
    asyncData()
  }, [])

  return data
}

export default useGetData
