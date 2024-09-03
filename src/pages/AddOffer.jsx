import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
const AddOffer = ({ token }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [exchange, setExchange] = useState("");
  const [picture, setPicture] = useState({});

  const [cloudinaryPicture, setCloudinaryPicture] = useState({});

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleBrand = (event) => {
    setBrand(event.target.value);
  };

  const handleSize = (event) => {
    setSize(event.target.value);
  };

  const handleColor = (event) => {
    setColor(event.target.value);
  };

  const handleCondition = (event) => {
    setCondition(event.target.value);
  };

  const handleCity = (event) => {
    setCity(event.target.value);
  };

  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleExchange = (event) => {
    setExchange(event.target.value);
  };

  const handlePicture = (event) => {
    setPicture(event.target.files[0]);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("picture", picture);
    formData.append("description", description);
    formData.append("brand", brand);
    formData.append("size", size);
    formData.append("color", color);
    formData.append("condition", condition);
    formData.append("city", city);
    formData.append("price", price);
    formData.append("exchange", exchange);
    fetchData(formData);
  };

  const fetchData = async (formData) => {
    try {
      const response = await axios.post(
        "https://site--backend-vinted--bf7zj7wtgltq.code.run/offer/publish",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <main className="add-offer-container">
        <div className="container">
          <h3 className="add-offer-form-title">Vends ton article</h3>
          <form onSubmit={handleSubmit}>
            <div className="input-photo-container">
              <input
                type="file"
                id="picture"
                name="picture"
                onChange={handlePicture}
              />
            </div>
            <div className="input-container">
              <div className="input-items">
                <p>Titre</p>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={title}
                  onChange={handleTitle}
                  placeholder="ex: perfecto"
                />
              </div>
              <div className="input-items">
                <p>Décris ton article</p>
                <input
                  type="text"
                  placeholder="ex: rarement utilisé"
                  name="description"
                  id="description"
                  value={description}
                  onChange={handleDescription}
                />
              </div>
            </div>
            <div className="input-container">
              <div className="input-items">
                <p>Marque</p>
                <input
                  type="text"
                  placeholder="ex: Chanel"
                  name="brand"
                  id="brand"
                  onChange={handleBrand}
                  value={brand}
                />
              </div>
              <div className="input-items">
                <p>Taille</p>
                <input
                  type="text"
                  name="size"
                  id="size"
                  value={size}
                  onChange={handleSize}
                  placeholder="ex: XS/46"
                />
              </div>
              <div className="input-items">
                <p>Couleur</p>
                <input
                  type="text"
                  name="color"
                  id="color"
                  onChange={handleColor}
                  placeholder="ex: bordeau"
                />
              </div>
              <div className="input-items">
                <p>Etat</p>
                <input
                  type="text"
                  placeholder="ex: piteux état"
                  name="condition"
                  id="condition"
                  onChange={handleCondition}
                />
              </div>
              <div className="input-items">
                <p>Lieu</p>
                <input
                  type="text"
                  placeholder="ex: Lyon"
                  name="city"
                  id="city"
                  onChange={handleCity}
                />
              </div>
            </div>
            <div className="input-container">
              <div className="input-items">
                <p>Prix</p>
                <input
                  type="text"
                  placeholder="ex: 0.00€"
                  name="price"
                  id="price"
                  onChange={handlePrice}
                />
              </div>
              <div className="input-items">
                <input
                  type="checkbox"
                  name="exchange"
                  id="exchange"
                  onChange={handleExchange}
                />
                Je suis intéressé(e) par les échanges
              </div>
            </div>
            <div className="submit-offer-add-container">
              <button>Ajouter</button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default AddOffer;
