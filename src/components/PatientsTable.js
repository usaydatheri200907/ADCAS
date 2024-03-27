import React, { useState, useEffect } from "react";
import axios from "axios";

const PatientsTable = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await axios.get("http://localhost:3001/patients/");
      setPatients(response.data);
    } catch (error) {
      console.error("Error fetching patients:", error);
    }
  };

  return (
    <div className="flex flex-col mt-8 ml-20">
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg flex-grow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Age
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Gender
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {patients.map((patient) => (
              <tr key={patient._id}>
                <td className="px-6 py-4 whitespace-nowrap">{patient.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{patient.age}</td>
                <td className="px-6 py-4 whitespace-nowrap">{patient.gender}</td>
                <td className="px-6 py-4 whitespace-nowrap space-x-2">
                  {/* Add action buttons here */}
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientsTable;
