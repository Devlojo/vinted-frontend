import { Link, useNavigate } from "react-router-dom";
import effectImage from "../assets/effect-image.svg";
import axios from "axios";
import { useState, useEffect } from "react";
const Home = ({ search }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--backend-vinted--bf7zj7wtgltq.code.run/offers?title=${search}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [search]);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <>
      <div className="header-image-container">
        <img src={effectImage} className="header-image-effect" alt="" />
        <div className="container">
          <aside className="home-image-box">
            <h1>Prêts à faire du tri dans vos placards ?</h1>
            <button
              onClick={() => {
                navigate("/offer/publish");
              }}
            >
              Commencer à vendre
            </button>
          </aside>
        </div>
      </div>
      <main className="container">
        <div className="offers-container">
          {data.map((offer, index) => {
            return (
              /* utilisation d'un parametre dynamique dans l'url */
              <Link
                className="link"
                to={"/offers/" + offer._id}
                key={offer._id}
                target="_blank"
              >
                <article>
                  <p>{offer.owner.account.username}</p>
                  <img
                    className="offer-image"
                    src={offer.product_image.secure_url}
                    alt="Photo de l'offre"
                  />
                  <p>{offer.product_details[0].brand}</p>
                  <p>{offer.product_details[0].size}</p>
                  <p>{offer.product_price} €</p>
                </article>
              </Link>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Home;
