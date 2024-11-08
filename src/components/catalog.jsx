import "../styles/catalog.css";
import { useNavigate } from "react-router-dom";
import MCard from "./card.jsx";
import MovieData from "../data/movieData.js";

let Catalog = () => {
  let navigate = useNavigate();

  let openI = (indeX) => {
    navigate(`/interface/${indeX}`);
  };

  return (
    <div className="catalog">
      <div className="headX">
        <h2> Hadipa </h2>
        <div className="nav-list">
          <nav>
            <button className="home">Home</button>
            <button className="marvel">Marvel</button>
            <button className="dc">Dc</button>
          </nav>
        </div>
        <button class="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className="bodyX">
        <div class="showcase">
          <div class="showcase-content">
            <h1 class="showcase-title">Featured Movie Title</h1>
            <p class="showcase-description">
              This is a short description of the featured movie.
            </p>
            <div class="showcase-buttons">
              <button class="btn btn-play">Play</button>
              <button class="btn btn-info">More Info</button>
            </div>
          </div>
        </div>

        <div className="movie-grid">
          {MovieData.map((val, index) => {
            return (
              <div onClick={() => openI([index])}>
                <MCard
                  chachu={MovieData[index].mainImg}
                  tau={MovieData[index].title}
                  mamu={MovieData[index].availability}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
