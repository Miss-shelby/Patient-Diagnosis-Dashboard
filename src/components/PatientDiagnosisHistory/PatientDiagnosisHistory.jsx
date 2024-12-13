/* eslint-disable react/prop-types */
import RespiratoryCard, { HeartRateCard, TemperatureCard } from "../cards/PatientDataCards"
import DiagnosisHistoryChart from "../DiagnosisChart/DiagnosisChart"
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdArrowDropup } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useEffect, useState } from "react";


const PatientDiagnosisHistory = ({patientProfileData}) => {
    const [diagnosisHistory,setDiagnosisHistory] = useState([])

    useEffect(()=>{
      if (patientProfileData?.length > 0) {
        const diagnosisHistoryData = patientProfileData.flatMap((data) =>
          data.diagnosis_history.slice(0, 6)
        );
        setDiagnosisHistory(diagnosisHistoryData);
      }
    },[patientProfileData])
   
    const isMobile = window.innerWidth <= 400; 
    
        const chartData = diagnosisHistory.map((diagnosisData) => ({
          name: `${ isMobile?diagnosisData?.month.slice(0, 1) : diagnosisData?.month.slice(0, 3)} ${
            isMobile
              ? diagnosisData.year.toString().slice(-2) 
              : diagnosisData.year 
          }`,
          systolic: diagnosisData?.blood_pressure?.systolic?.value,
          diastolic: diagnosisData?.blood_pressure?.diastolic?.value,
        }));
    
        const { respiratory_rate, heart_rate, temperature } = diagnosisHistory[0] || {};

        const respiratoryRateValue = respiratory_rate?.value;
        const respiratoryRateLevels = respiratory_rate?.levels;
        
        const heartRateValue = heart_rate?.value;
        const heartRateLevels = heart_rate?.levels;
        
        const tempValue = temperature?.value;
        const tempLevels = temperature?.levels;
        
        

  return (
    <div className="bg-white p-4 rounded-2xl mb-4">
    <p className="sm:text-2xl text-lg  font-extrabold text-[#072635] mb-6 font-manrope">Diagnosis History</p>
    <div className="bg-[#F4F0FE] gap-4 pt-4 mt-3 rounded-2xl flex flex-wrap lg:flex-nowrap items-start">
      <div className="lg:w-[70%] w-full">
        <div className="flex pl-4 justify-between">
          <p className="font-bold font-manrope text-xs sm:text-lg text-[#072635]">Blood Pressure</p>
          <p className="flex items-center text-[#072635] font-manrope text-[11px] sm:text-sm">Last 6 months
            <span className="ml-2 cursor-pointer"><MdKeyboardArrowDown size={20} /></span></p>
        </div>
        < DiagnosisHistoryChart chartData={chartData}  />
      </div>
      <div className="lg:w-[30%] w-full px-6 pb-4 sm:pb-0 lg:px-0 lg:pr-3">
        <div className="flex items-center"> 
          <div className="bg-[#E66FD2] mr-2 rounded-full h-[10px] w-[10px]"></div>
          <p className="text-[#072635] text-sm font-bold font-manrope">Systolic</p>
        </div>
        <p className="text-[#072635] font-bold font-manrope text-lg pt-2">{diagnosisHistory[0]?.blood_pressure?.systolic?.value}</p>
        <p className="flex items-center font-manrope text-[#072635] text-sm  border-b border-[#CBC8D4] pb-4">
          <span><IoMdArrowDropup size={20} /></span>
        {diagnosisHistory[0]?.blood_pressure?.systolic?.levels}</p>
        <div className="flex items-center mt-6"> 
          <div className="bg-[#8C6FE6] mr-2 rounded-full h-[10px] w-[10px]"></div>
          <p className="text-[#072635] text-sm font-bold font-manrope">Diastolic</p>
        </div>
        <p className="text-[#072635] font-manrope font-bold text-lg pt-2">{diagnosisHistory[0]?.blood_pressure?.diastolic?.value}</p>
        <p className="flex items-center font-manrope text-[#072635] text-sm ">
          <span><MdOutlineArrowDropDown size={20} /></span>
          {diagnosisHistory[0]?.blood_pressure?.diastolic?.levels}</p>
        </div>
    </div>
    <div className="grid grid-cols-1  sm:grid-cols-3 sm:gap-4 mt-3">
      <RespiratoryCard  respiratoryRateValue={respiratoryRateValue} respiratoryRateLevels={respiratoryRateLevels}/>
      <TemperatureCard tempValue ={tempValue} tempLevels={tempLevels}/>
      <HeartRateCard  heartRateValue={heartRateValue} heartRateLevels={heartRateLevels}/>
    </div>
  </div>
  )
}

export default PatientDiagnosisHistory
