

import DiagnosticList from "./components/DiagnosticList/DiagnosticList"
import LabResult from "./components/LabResults/LabResult"
import Navbar from "./components/NavBar/Nav"
import NavBar from "./components/NavBar/NavBar"
import PatientDiagnosisHistory from "./components/PatientDiagnosisHistory/PatientDiagnosisHistory"
import PatientProfile from "./components/PatientProfile/PatientProfile"
import PatientsList from "./components/PatientsList/PatientsList"
import useFetchDiagnosisHistory from "./components/customHooks/UseFetchDiagnosisHistory"
import { useEffect, useState } from "react"


function App() {
  const { patientsData, error, isLoading, handleFetch } = useFetchDiagnosisHistory();
  const [patientProfileData, setPatientProfileData] = useState([]);
  const [patientsName,setPatientsName] = useState("Jessica Taylor")

  useEffect(() => {
    handleFetch();
  }, []);

  useEffect(() => {
    if (patientsData?.length > 0 ) {
      const filteredData = patientsData.filter((data) =>
        data.name.includes(patientsName)
      );
      setPatientProfileData(filteredData);
    }
  }, [patientsData,patientsName]); 

  return (
    <>

<div className="bg-[#F6F7F8] w-full pb-4">
  <div className="pt-6 px-5 sm:px-4 lg:px-4 sm:max-w-[1400px] mx-auto">
    <NavBar />
    {/* <Navbar/> */}
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 sm:gap-4 lg:gap-8 mt-6">
      <div className="col-span-1 sm:col-span-1 lg:col-span-1">
        <div className="bg-white rounded-2xl px-3">
          <PatientsList patientsData={patientsData} patientsName={patientsName}
           isLoading={isLoading} error={error}  setPatientsName={setPatientsName} />
        </div>
      </div>
      <div className="col-span-1 sm:col-span-2 lg:col-span-2">
        <div className=" ">
          <PatientDiagnosisHistory patientProfileData={patientProfileData} />
          <DiagnosticList isLoading={isLoading} error={error} patientProfileData={patientProfileData} />
        </div>
      </div>
      <div className="col-span-1 sm:col-span-3 lg:col-span-1">
        <div className=" sm:grid sm:grid-cols-2 gap-4 lg:block items-start">
          <PatientProfile isLoading={isLoading} error={error} patientsName={patientsName}
           setPatientsName={setPatientsName} patientProfileData={patientProfileData} />
          <LabResult isLoading={isLoading} error={error} patientProfileData={patientProfileData} />
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default App
