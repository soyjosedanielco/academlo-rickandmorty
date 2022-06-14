import {useEffect, useState} from 'react'
import axios from 'axios'

export default function useApi() {
    const [location, setLocation] = useState();
    const [loader, setLoader] = useState("true");
    const [input, setInput] = useState("");
  
    useEffect(() => {
      const getRandomLocation = Math.ceil(Math.random() * 126)
      const id = input === "" ? getRandomLocation : input
  
      const URL = `https://rickandmortyapi.com/api/location/${id}`
      axios.get(URL)
      .then(res => {
        setLocation(res.data)
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoader(false);
      })
    }, [input])
  
  return {setInput, location, loader}
}
