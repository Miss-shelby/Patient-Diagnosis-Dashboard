/* eslint-disable react/prop-types */

import { LuMoreHorizontal } from "react-icons/lu";
import { MdSearch } from "react-icons/md";

const PatientsList = ({ patientsData, isLoading, error,patientsName,setPatientsName }) => {
  return (
    <div className="w-full rounded-2xl mb-4 sm:mb-0 sm:bg-white">
      <div className="flex pt-4 items-center px-4 justify-between">
        <p className="text-[#072635] font-bold text-lg sm:text-2xl">Patients</p>
        <MdSearch size={20} />
      </div>
      {isLoading ? (
        <p>loading....</p>
      ) : error ? (
        <p className="text-red-500 capitalize font-medium mt-4">
          Failed to load patients data😓
        </p>
      ) : (
        <div className="flex flex-col mt-6 overflow-y-auto max-h-[100vh]">
          {patientsData.map((data) => {
            return (
              <PatientCard
                imgSrc={data.profile_picture}
                key={data.name}
                gender={data.gender}
                name={data.name}
                age={data.age}
                patientsName={patientsName}
                setPatientsName={setPatientsName}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PatientsList;

const PatientCard = ({ name, gender, age, imgSrc,patientsName,setPatientsName }) => {
  return (
    <div onClick={() => setPatientsName(name)} className={`flex items-center ${name == patientsName? 'bg-[#D8FCF7]' : ''} px-4 cursor-pointer hover:bg-[#D8FCF7] my-2
     hover:transition-all(0.8s) justify-between w-full py-3`}>
      <div className="flex items-center">
        <img
          className="h-10 w-10 object-cover mr-2 shrink-0"
          src={imgSrc}
          alt="patient-image"
        />
        <p className="text-[#072635] font-manrope text-xs sm:text-sm font-bold">
          {name}
          <span className="block text-[#707070] text-xs sm:text-sm font-manrope font-normal">
            {gender}, {age}
          </span>
        </p>
      </div>
      <LuMoreHorizontal cursor="pointer" size={20} />
    </div>
  );
};