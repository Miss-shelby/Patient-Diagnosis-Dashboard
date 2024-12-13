/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { HiOutlineDownload } from "react-icons/hi";
const LabResult = ({isLoading,error,patientProfileData}) => {
   const [labResults,setLabResults] = useState([])

   useEffect(()=>{
      if( patientProfileData?.length){
        const result = patientProfileData.map((data)=> data.lab_results )
        setLabResults(result)
      }
   },[patientProfileData])
   if (isLoading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>An error occurred: {error.message}</p>;
    }
  return (
    <div className="bg-white max-h-[200px] overflow-y-auto rounded-2xl  mt-6">
    <h3 className="text-2xl text-[#072635] pt-3 pb-5 font-manrope font-bold pl-4">Lab Results</h3>
    {labResults.length > 0 ? (
  <ul className="space-y-4">
    {labResults.map((data, index) => (
      <li
        key={index}
        className="block  px-4 py-4 rounded-lg bg-white"
      >
        <div className="flex items-start justify-between w-full">
          <div className="text-[13px]  text-[#072635] w-full capitalize space-y-1">
            {String(data)
              .split(',')
              .map((word, wordIndex) => (
                <p className="flex items-center px-3 cursor-pointer py-2 hover:bg-[#F6F7F8] justify-between"
                 key={wordIndex}>{word} <span>  <HiOutlineDownload size={20} className="text-[#072635] cursor-pointer" /></span></p>
              ))}
          
          </div>
        </div>
      </li>
    ))}
  </ul>
) : (
  <p>No lab results available</p>
)}


  </div>
  )
}

export default LabResult