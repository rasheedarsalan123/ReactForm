import React from 'react'
import { useState,useEffect } from 'react';
const ReactForm = () => {
    const [detail, setDetail] = useState(false);
    const [error, setError] = useState("");
    const [localStorageData, setLocalStorageData] = useState([]);
    const [toggleButton, setToggleButton] = useState(false);
    const [editId, setEditId] = useState(null);
  
    const [formData, setFormData] = useState({
      Name: "",
      Email: "",
      DrName: "",
      Time: "",
      message: "",
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!formData.Name || !formData.Email || !formData.DrName || !formData.Time || !formData.message)
         {
        setError("Field is Required");
        return;
      }
  
      if (toggleButton) {
        setLocalStorageData(
          localStorageData.map((elem) =>
            elem.id === editId
              ? { ...elem, formData }
              : elem
          )
        );
      } else {
        const formDataObj = { id: new Date().getTime().toString(), formData };
        setLocalStorageData((prev) => [...prev, formDataObj]);
      }
  
      setFormData({
        Name: "",
        Email: "",
        DrName: "",
        Time: "",
        message: "",
      });
      setError("");
      setToggleButton(false);
    };
  
    useEffect(() => {
      console.log("localStorageData", localStorageData);
    }, [localStorageData]);
  
    const handlerDelete = (id) => {
      const updatedData = localStorageData.filter((elem) => elem.id !== id);
      setLocalStorageData(updatedData);
    };
  
    const handlerEdit = (id) => {
      const editItem = localStorageData.find((elem) => elem.id === id);
      setFormData(editItem.formData);
      setToggleButton(true);
      setEditId(id);
    };
  
    return (
      <div className="p-4 bg-gray-50 min-h-screen">

        <div className="mx-auto max-w-3xl bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-center text-2xl font-bold text-blue-600">Appointment Form</h1>
          <form onSubmit={handleSubmit} className="mt-4 space-y-6">
            <input
              type="text"
              placeholder="Full Name *"
              value={formData.Name}
              onChange={(e) => setFormData({ ...formData, Name: e.target.value })}
              className="w-full p-3 border rounded-md focus:outline-blue-500"
            />
            {error && !formData.Name && <p className="text-red-500">Name {error}</p>}
  
            <input
              type="email"
              placeholder="Email *"
              value={formData.Email}
              onChange={(e) => setFormData({ ...formData, Email: e.target.value })}
              className="w-full p-3 border rounded-md focus:outline-blue-500"
            />
            {error && !formData.Email && <p className="text-red-500">Email {error}</p>}
  
            <select
              value={formData.DrName}
              onChange={(e) => setFormData({ ...formData, DrName: e.target.value })}
              className="w-full p-3 border rounded-md focus:outline-blue-500"
            >
              <option value="">Select Doctor</option>
              <option value="Dr Ibrahim">Dr Ibrahim</option>
              <option value="Dr Noman">Dr Noman</option>
              <option value="Dr Wahaj">Dr Wahaj</option>
            </select>
            {error && !formData.DrName && <p className="text-red-500">Doctor Name {error}</p>}
  
            <select
              value={formData.Time}
              onChange={(e) => setFormData({ ...formData, Time: e.target.value })}
              className="w-full p-3 border rounded-md focus:outline-blue-500"
            >
              <option value="">Select Time</option>
              <option value="3:00 Available">3:00 Available</option>
              <option value="4:00 Available">4:00 Available</option>
              <option value="5:00 Available">5:00 Available</option>
            </select>
            {error && !formData.Time && <p className="text-red-500">Time {error}</p>}
  
            <textarea
              placeholder="Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-3 border rounded-md focus:outline-blue-500"
            ></textarea>
            {error && !formData.message && <p className="text-red-500">Message {error}</p>}
  
            <button
              type="submit"
              className="w-full py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              {toggleButton ? "Update Appointment" : "Book Appointment"}
            </button>
          </form>
        </div>
  
        {/* Appointment Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {localStorageData.map((item) => (
            <div key={item.id} className="p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-lg font-bold text-blue-600">Patient Detail</h2>
              <p className="mt-2">Name: {item.formData.Name}</p>
              <p>Email: {item.formData.Email}</p>
              <p>Doctor: {item.formData.DrName}</p>
              <p>Time: {item.formData.Time}</p>
              <p>Message: {item.formData.message}</p>
              <div className="mt-4 flex justify-between">
                <button
                  onClick={() => handlerEdit(item.id)}
                  className="px-4 py-2 bg-green-500 text-white rounded-md"
                >
                  Edit
                </button>
                <button
                  onClick={() => handlerDelete(item.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
}

export default ReactForm
