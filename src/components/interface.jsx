import "../styles/interface.css";
import MovieData from "../data/movieData";
import { useLocation, useParams } from "react-router-dom";
import VideoPlayer from "./videoplayer.jsx";

let Interface = ({ indexo }) => {
  console.log(useLocation());
  let { i } = useParams();
  console.log(i);

  return (
    <div className="interface">
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

      <div className="bodyI">
        <div className="m-player">
          <VideoPlayer videoPath={MovieData[i].path}></VideoPlayer>





        </div>

        <div className="m-details">
          <h2>{MovieData[i].title}</h2>

          <p> {MovieData[i].details}</p>

          <div className="m-rating">
            <i class="bx bx-star" id="star"></i>
            <i class="bx bx-star" id="star"></i>
            <i class="bx bx-star" id="star"></i>
            <i class="bx bx-star" id="star"></i>
            <i class="bx bx-star" id="star"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interface;
