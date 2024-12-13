import { GoHome } from "react-icons/go";
import { FiMessageSquare } from "react-icons/fi";
import { FiMoreVertical } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoCalendarClearOutline } from "react-icons/io5";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { TfiCreditCard } from "react-icons/tfi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";

const NavBar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
 
  return (
    <nav>
      <div className="flex justify-between items-center py-3 px-6 bg-white rounded-[50px]">
        <div className=""> 
          <img className="h-6  sm:h-8 md:h-7 lg:h-6 xl:h-10  object-cover" src="/TestLogo.svg" alt="logo-img"/>
        </div>
        <ul className="text-[#072635] hidden lg:flex cursor-pointer font-extrabold font-manrope lg:text-xs xl:text-sm ">
          <li className="pr-6 py-[13px] flex items-center ">
          <GoHome size={20} className="mr-[6px]  font-extrabold" /> Overview
          </li>
          <li className="bg-[#01F0D0] px-3 rounded-[41px] py-[9px] flex items-center  mr-6">
          < MdOutlinePeopleAlt size={20} className="mr-[6px] text-lg" /> Patients</li>
          <li className="py-[13px] flex items-center">   <IoCalendarClearOutline color="#072635" size={18} className="mr-1 " /> Schedule</li>
          <li className="mx-6 py-[13px] flex items-center"> <FiMessageSquare size={20}   className="mr-[6px] " />Message</li>
          <li className="py-[13px] flex items-center"><TfiCreditCard  size={20}   className="mr-[6px] text-lg" />Transactions</li>
        </ul>

        {/* mobile toggle */}
        <button onClick={() => setToggleMenu(!toggleMenu)} className="block lg:hidden">
          {
            toggleMenu?
            < IoIosClose  size={25} className="cursor-pointer" color="#01F0D0"/>
            :
            < RxHamburgerMenu  size={20} className="cursor-pointer" color="#01F0D0"/>
          }
        </button>
       
        <div className="hidden lg:flex items-center">
          <img className="h-10 w-10 object-cover mr-2" src="/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png" alt="doctor-image"/>
          <p className="text-[#072635] text-sm font-bold font-manrope">Dr. Jose Simmons
            <span className="block text-[#707070] font-normal">General Practitioner</span></p>
            <div className="flex items-center ml-6">
            <IoSettingsOutline size={20} />
            <FiMoreVertical size={20} />
            </div>
        </div>
      </div>
       {/* mobile menu */}
       <div className={`fixed z-40 w-full bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
              !toggleMenu ? "h-0" : "h-full"
            }`}>
            <ul className="text-[#072635] text-sm flex flex-col pl-6 pt-6 cursor-pointer font-extrabold font-manrope">
              <li className="pr-6 flex items-center ">
              <GoHome size={20} className="mr-[6px]   font-extrabold" /> Overview
              </li>
              <li className="bg-[#01F0D0] px-3 my-6 rounded-[41px] py-[7px] flex items-center  mr-6">
              < MdOutlinePeopleAlt size={20} className="mr-[6px] text-lg" /> Patients</li>
              <li className=" flex items-center">   <IoCalendarClearOutline color="#072635" size={18} className="mr-1 " /> Schedule</li>
              <li className="  flex items-center my-6"> <FiMessageSquare size={20}   className="mr-[6px] " />Message</li>
              <li className=" flex items-center"><TfiCreditCard  size={20}   className="mr-[6px] text-lg" />Transactions</li>
            </ul>
              <div className="flex justify-between mt-10  px-6 items-center">
                <div className="flex items-center text-sm flex-wrap">
                <img className="h-10 w-10 object-cover mr-2" src="/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png" alt="doctor-image"/>
                <p className="text-[#072635] text-sm font-bold font-manrope">Dr. Jose Simmons
                  <span className="block text-[#707070] font-normal">General Practitioner</span></p>
                </div>
                <div className="flex items-center ml-6">
                <IoSettingsOutline size={20} />
                <FiMoreVertical size={20} />
                </div>
          </div>
        </div>
    </nav>
  )
}

export default NavBar