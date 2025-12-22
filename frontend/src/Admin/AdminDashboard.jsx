// AdminDashboard.jsx
import { useState } from "react";

export default function AdminDashboard() {
  const [car, setCar] = useState({
    title: "",
    model: "",
    year: "",
    bodyType: "",
    image: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if(name === "image") {
      setCar({...car, image: files[0]});
    } else {
      setCar({...car, [name]: value});
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Car data:", car);
    alert("Car uploaded successfully!");
    // Here you can send the data to backend using fetch/axios
  }

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center p-4">
      <form className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-lg" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold text-white mb-6">Upload Car Details</h1>

        <input 
          type="text"
          name="title"
          placeholder="Car Title"
          className="w-full p-3 mb-4 rounded bg-gray-700 text-white"
          value={car.title}
          onChange={handleChange}
        />
        <input 
          type="text"
          name="model"
          placeholder="Model"
          className="w-full p-3 mb-4 rounded bg-gray-700 text-white"
          value={car.model}
          onChange={handleChange}
        />
        <input 
          type="number"
          name="year"
          placeholder="Year"
          className="w-full p-3 mb-4 rounded bg-gray-700 text-white"
          value={car.year}
          onChange={handleChange}
        />
        <input 
          type="text"
          name="bodyType"
          placeholder="Body Type"
          className="w-full p-3 mb-4 rounded bg-gray-700 text-white"
          value={car.bodyType}
          onChange={handleChange}
        />
        <input 
          type="file"
          name="image"
          className="w-full mb-4 text-white"
          onChange={handleChange}
        />

        <button 
          type="submit"
          className="w-full p-3 bg-green-500 hover:bg-green-600 text-white rounded"
        >
          Upload Car
        </button>
      </form>
    </div>
  )
}
