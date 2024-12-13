/* eslint-disable react/prop-types */
import { MdOutlineArrowDropDown } from "react-icons/md";

const RespiratoryCard = ({respiratoryRateValue,respiratoryRateLevels}) => {
  return (
    <div className="bg-[#E0F3FA] rounded-xl flex flex-col pl-4">
        <div className=" pt-2">
            <img src="/respiratory rate.svg"/>
        </div>
        <p className="capitalise text-[#072635] font-medium font-manrope pt-3">Respiratory Rate</p>
        <p className="capitalize text-[#072635] text-2xl font-manrope font-bold">{respiratoryRateValue} <span className="lowercase">bpm</span></p>
        <p className="capitalize text-[#072635] text-sm font-manrope py-3">{respiratoryRateLevels}</p>
    </div>
  )
}

export default RespiratoryCard

export const TemperatureCard = ({tempValue,tempLevels}) => {
    return (
      <div className="bg-[#FFE6E9] my-6 sm:my-0 rounded-xl flex flex-col items pl-4">
          <div className=" pt-2">
              <img src="/temperature.svg"/>
          </div>
          <p className="capitalise text-[#072635] font-medium pt-3 font-manrope">Temperature</p>
          <p className="capitalize text-[#072635] font-manrope text-2xl font-bold">{tempValue}<span>°F</span></p>
          <p className="capitalize text-[#072635] text-sm m py-3 font-manrope">{tempLevels}</p>
      </div>
    )
  }

  export const HeartRateCard = ({ heartRateValue,heartRateLevels}) => {
    return (
      <div className="bg-[#FFE6F1] rounded-xl flex flex-col pl-4">
          <div className=" pt-2">
              <img src="/HeartBPM (1).svg"/>
          </div>
          <p className="capitalise text-[#072635] font-medium pt-3 font-manrope">Heart Rate</p>
          <p className="capitalize text-[#072635] font-manrope text-2xl font-bold">{heartRateValue}<span className="lowercase">bpm</span></p>
          <p className="flex items-center text-[#072635] font-manrope text-sm my-3">
                    <span><MdOutlineArrowDropDown size={22} /></span>
                   {heartRateLevels}</p>
      </div>
    )
  }
  
  