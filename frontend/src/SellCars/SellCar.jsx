import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SellCar.css";
import Navbar from "../Home/Navbar";
import sellimage from "../assets/car.jpg";

export default function SellCar() {
  const navigate = useNavigate();

  const [car, setCar] = useState({
    title: "",
    bodyType: "",
    model: "",
    year: "",
    exteriorColor: "",
    description: "",
    fuelType: "",
    mileage: "",
    engineCapacity: "",
    price: "",
    condition: "New",
    imageFile: null,
  });

  // Handle text inputs, radio, and select
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "radio") {
      setCar({ ...car, [name]: value });
    } else {
      setCar({ ...car, [name]: value });
    }
  };

  // Handle file input
  const handleFileChange = (e) => {
    setCar({ ...car, imageFile: e.target.files[0] });
  };

  //
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const formData = new FormData();
    formData.append("title", car.title);
    formData.append("bodyType", car.bodyType);
    formData.append("model", car.model);
    formData.append("year", Number(car.year));
    formData.append("fuelType", car.fuelType);
   formData.append("price", Number(car.price));
formData.append("mileage", Number(car.mileage));
formData.append("engineCapacity", Number(car.engineCapacity));
    formData.append("description", car.description);
    formData.append("condition", car.condition);
    formData.append("exteriorColor", car.exteriorColor);
    if (car.imageFile) formData.append("image", car.imageFile);

    const res = await fetch("http://localhost:8080/api/cars/add", {
      method: "POST",
      body: formData,
    });

    // If your backend sends plain text
    const text = await res.text(); 
    console.log("Backend response:", text);

    if (!res.ok) throw new Error(text || "Failed to upload");

    alert("Car uploaded successfully!");
    navigate("/used-cars");

  } catch (err) {
    console.error("Upload failed:", err);
    alert("Upload failed. Please check the console.");
  }
};


  return (
    <div className="sell-layout">
      <Navbar />

      <div className="sell-page">
        <form className="sell-form" onSubmit={handleSubmit}>
          {/* LEFT */}
          <div className="sell-left">
            <h2>Sell Your Car</h2>
            <p className="breadcrumb">Homepage - Sell</p>

            <div className="sell-images">
              <img src={sellimage} alt="car" />
            </div>
          </div>

          {/* RIGHT */}
          <div className="sell-right">
            <section>
              <h3>Car Details</h3>

              <div className="row">
                <input
                  name="title"
                  placeholder="Title"
                  value={car.title}
                  onChange={handleChange}
                  required
                />

                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      name="condition"
                      value="New"
                      checked={car.condition === "New"}
                      onChange={handleChange}
                    />
                    New
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="condition"
                      value="Used"
                      checked={car.condition === "Used"}
                      onChange={handleChange}
                    />
                    Used
                  </label>
                </div>
              </div>

              <div className="row">
                <input
                  name="bodyType"
                  placeholder="Body Type"
                  value={car.bodyType}
                  onChange={handleChange}
                />
                <input
                  name="model"
                  placeholder="Model"
                  value={car.model}
                  onChange={handleChange}
                />
              </div>

              <div className="row">
                <input
                  name="year"
                  placeholder="Year"
                  value={car.year}
                  onChange={handleChange}
                />
                <input
                  name="exteriorColor"
                  placeholder="Exterior Color"
                  value={car.exteriorColor}
                  onChange={handleChange}
                />
              </div>

              <textarea
                name="description"
                placeholder="Description"
                value={car.description}
                onChange={handleChange}
              />
            </section>

            <section>
              <h3>Engine Details</h3>
              <div className="row">
                <input
                  name="fuelType"
                  placeholder="Fuel Type"
                  value={car.fuelType}
                  onChange={handleChange}
                />
                <input
                  name="mileage"
                  placeholder="Mileage"
                  value={car.mileage}
                  onChange={handleChange}
                />
                <input
                  name="engineCapacity"
                  placeholder="Engine Capacity"
                  value={car.engineCapacity}
                  onChange={handleChange}
                />
              </div>
            </section>

            <section>
              <h3>Features</h3>
              <div className="features-grid">
                {[
                  "Power Steering",
                  "Bluetooth",
                  "USB Port",
                  "Spacious",
                  "AC",
                  "Wifi",
                  "Alarm",
                  "Other",
                  "Roof Rack",
                  "Sunroof",
                  "Airbags",
                ].map((f) => (
                  <label className="feature-item" key={f}>
                    <input type="checkbox" />
                    <span>{f}</span>
                  </label>
                ))}
              </div>
            </section>

            <section>
              <h3>Price</h3>
              <input
                name="price"
                placeholder="Full Price"
                value={car.price}
                onChange={handleChange}
              />
            </section>

            <section>
              <h3>Images & Video</h3>

              <div className="image-upload-box">
                <label htmlFor="imageUpload" className="upload-label">
                  <div className="upload-plus">+</div>
                  <span>Upload your image</span>
                </label>
                <input
  type="file"
  id="imageUpload"
  accept="image/*"
  required
  hidden
  onChange={handleFileChange}
/>

               
              </div>

              {car.imageFile && (
                <img
                  src={URL.createObjectURL(car.imageFile)}
                  alt="Preview"
                  className="image-preview"
                />
              )}
            </section>

            <button type="submit" className="submit-btn">
              Sell My Car
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
