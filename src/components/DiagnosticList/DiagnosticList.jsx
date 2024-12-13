/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const DiagnosticList = ({ isLoading, error, patientProfileData }) => {
  const [diagnosticList, setDiagnosticList] = useState([]);

  useEffect(() => {
    if (patientProfileData?.length) {
      const diagnostics = patientProfileData.flatMap((data) => data.diagnostic_list || []);
      setDiagnosticList(diagnostics);
    }
  }, [patientProfileData]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

  return (
    <div className="bg-white rounded-2xl px-4 mb-6">
      <h3 className="sm:text-2xl text-lg  text-[#072635]  pt-4 font-manrope pb-6 font-bold">Diagnostic List</h3>
        <div className="overflow-y-auto sm:max-h-[160px] relative ">
          {diagnosticList.length > 0 ? (
            <table className="w-full border-collapse "  >
              <thead className="rounded-t-2xl ">
                <tr className="rounded-2xl">
                  <th>Problem/Diagnosis</th>
                  <th>Description</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className="w-full">
                {diagnosticList.map((data, index) => (
                  <tr key={index}>
                    <td>{data?.name || "N/A"}</td>
                    <td>{data?.description || "N/A"}</td>
                    <td>{data?.status || "N/A"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No diagnostic data available.</p>
          )}
        </div>
    </div>
  );
};

export default DiagnosticList;
