/* eslint-disable react/prop-types */
import { CiCalendar } from "react-icons/ci";
import { CgGenderFemale } from "react-icons/cg";
import { MdOutlineCall } from "react-icons/md";
import { IoShieldCheckmarkOutline } from "react-icons/io5";


const PatientProfile = ({isLoading,error,patientProfileData}) => {
    if (isLoading) {
        return <p>Loading...</p>;
      }
    
      if (error) {
        return <p>An error occurred: {error.message}</p>;
      }

  return (
    <>
   {
    patientProfileData.map((data)=> {
        return(
        <div key={data.age} className="flex pt-6 flex-col    items-center bg-white rounded-2xl">
        <img src={data?.profile_picture} className="h-40 w-40 object-cover" alt="patient-profile-image" />
        <h4 className="text-2xl pt-6 text-[#072635] font-manrope font-bold">{data?.name}</h4>
        <div className="flex flex-col self-start px-4">
            <div className="flex items-center justify-self-start mt-7">
            <div className="bg-[#F6F7F8] rounded-full p-[6px]">
                <CiCalendar size={20} />
            </div>
            <p className="text-sm text-[#072635] ml-4 font-manrope font-medium">
                Date Of Birth
                <span className="text-[ #072635] font-bold block">{data?.date_of_birth}</span>
            </p>
            </div>
            <div className="flex items-center justify-self-start mt-4">
            <div className="bg-[#F6F7F8] rounded-full p-[6px]">
                <CgGenderFemale size={20} />
            </div>
            <p className="text-sm text-[#072635] font-manrope font-medium ml-4">
                Gender
                <span className="text-[ #072635] font-bold block">{data?.gender}</span>
            </p>
            </div>
            <div className="flex items-center justify-self-start mt-4">
            <div className="bg-[#F6F7F8] rounded-full p-[6px]">
                <MdOutlineCall size={20} />
            </div>
            <p className="text-sm text-[#072635] ml-4 font-manrope font-medium ">
                Contact Info.
                <span className="text-[ #072635] font-bold block">{data?.phone_number}</span>
            </p>
            </div>
            <div className="flex items-center justify-self-start mt-4">
            <div className="bg-[#F6F7F8] rounded-full p-[6px]">
                <MdOutlineCall size={20} />
            </div>
            <p className="text-sm text-[#072635] ml-4 font-manrope font-medium ">
                Emergency Contacts
                <span className="text-[ #072635] font-bold block">{data?.emergency_contact}</span>
            </p>
            </div>
            <div className="flex items-center justify-self-start mt-4">
            <div className="bg-[#F6F7F8] rounded-full p-[6px]">
                <IoShieldCheckmarkOutline size={20} />
            </div>
            <p className="text-sm text-[#072635] ml-4 font-manrope font-medium ">
                Insurance Provider
                <span className="text-[ #072635] font-bold block">{data?.insurance_type}</span>
            </p>
            </div>
        </div>
        <button
            className="bg-[#01F0D0] text-[#072635] font-bold font-manrope text-sm text-center py-[8px] rounded-3xl px-5 my-8"
        >
            Show All Information
        </button>
        </div>
        )
    })}
    </>
  );
};

export default PatientProfile;
