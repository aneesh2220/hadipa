import "../styles/catalog.css";
import { useNavigate } from "react-router-dom";

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
      </div>

      <div className="bodyX">
        <div className="movies-row1">
          <div className="movie-1" onClick={() => openI(0)}></div>
          <div className="movie-2 " onClick={() => openI(1)}></div>
          <div className="movie-3" onClick={() => openI(2)}></div>
          <div className="movie-4" onClick={() => openI(3)}></div>
        </div>

        <div className="display-text-row1">
          <p className="display-1">Avangers :2012</p>
          <p className="display-2"> Avangers :endgame</p>
          <p className="display-3">Black Panther: Wakanda forever</p>
          <p className="display-4">Multiverse of madness </p>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
