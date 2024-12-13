import axios from "axios";
import { useState } from "react";


const useFetchDiagnosisHistory = () => {
const [patientsData,setPatientsData] = useState([])
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState('');
const username = import.meta.env.VITE_API_USERNAME;
const password = import.meta.env.VITE_API_PASSWORD;

let auth = btoa(`${username}:${password}`);
    const handleFetch = ()=>{
    axios.get(`https://fedskillstest.coalitiontechnologies.workers.dev`,{
        headers:{
            'Authorization': `Basic ${auth}`
        }
    })
    .then(function (response) {
        if (response.status === 200) {
        setPatientsData(response.data) 
        setIsLoading(false)
        }
    })
    .catch(function (error) {
        console.log(error);
        setError(error)
        setIsLoading(false)
        
    })
    .finally(() => {
        setIsLoading(false);
      });

    }
    
    return {patientsData,isLoading,error,handleFetch}
}

export default useFetchDiagnosisHistory






