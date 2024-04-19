import React, { useState, useEffect } from "react";
import axios from "axios";

const PatientsTable = () => {
  const [patients, setPatients] = useState([]);
  const [editingPatientId, setEditingPatientId] = useState(null);
  const [deletingPatientId, setDeletingPatientId] = useState(null);

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

  const handleEdit = (patientId) => {
    setEditingPatientId(patientId);
  };

  const handleDelete = async (patientId) => {
    try {
      await axios.delete(`http://localhost:3001/patients/${patientId}`);
      fetchPatients();
    } catch (error) {
      console.error("Error deleting patient:", error);
    }
  };

  return (
    <div className="shadow border-b border-gray-400 sm:rounded-lg flex-grow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {patients.map((patient) => (
            <tr key={patient._id}>
              <td className="px-6 py-4 whitespace-nowrap">{patient.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{patient.age}</td>
              <td className="px-6 py-4 whitespace-nowrap">{patient.gender}</td>
              <td className="px-6 py-4 whitespace-nowrap">{patient.phoneNumber}</td>
              <td className="px-6 py-4 whitespace-nowrap space-x-2">
                {editingPatientId !== patient._id ? (
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleEdit(patient._id)}>Edit</button>
                ) : (
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => setEditingPatientId(null)}>Save</button>
                )}
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => setDeletingPatientId(patient._id)}>Delete</button>
                {deletingPatientId === patient._id && (
                  <div>
                    <p>Are you sure you want to delete?</p>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDelete(patient._id)}>Yes</button>
                    <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={() => setDeletingPatientId(null)}>No</button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientsTable;
