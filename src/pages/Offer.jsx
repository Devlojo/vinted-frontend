import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Offer = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--backend-vinted--bf7zj7wtgltq.code.run/offers/${id}`
        );
        //console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <p>Loading ....</p>
  ) : (
    <main className="offer-container">
      <div>
        <img
          src={data.product_image.secure_url}
          className="product-image-details"
          alt="image de l'offre"
        />
      </div>
      <aside className="product-container">
        <p>{data.product_price} €</p>

        {data.product_details.map((detail, index) => {
          return (
            <div key={index} className="product-details">
              <p>
                {" "}
                <span>MARQUE</span> <span>{detail.brand}</span>
              </p>
              <p>
                {" "}
                <span>TAILLE</span> <span>{detail.size}</span>
              </p>
              <p>
                {" "}
                <span>ETAT</span> <span>{detail.condition}</span>
              </p>
              <p>
                {" "}
                <span>COULEUR</span> <span>{detail.color}</span>
              </p>
              <p>
                {" "}
                <span>EMPLACEMENT</span> <span>{detail.city}</span>
              </p>
            </div>
          );
        })}
        <div className="product-bottom-container">
          <p>{data.product_name}</p>
          <p>{data.product_description}</p>
          <p>{data.product_description}</p>
          <p>{data.owner.account.username}</p>
        </div>
        <button>Acheter</button>
      </aside>
    </main>
  );
};

export default Offer;
